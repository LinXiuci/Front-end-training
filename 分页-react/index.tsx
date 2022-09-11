import { useEffect, useRef, useState } from 'react'
import { ContentArticle } from './components/index'
import { articlesAPI } from '@/api/articleAPI'
import '@/styles/AppContent.css'

/***
 * 内容页
 *  */

const paging:any = {
  pageSize : 3,   // 每一页要显示的数据条数
  totalPage: 0,   // 总页数
  current  : localStorage.getItem('current')  || 1,   // 当前的页码
}
function AppContent() {
  
  // 文章数据列表
  const [datalist, setDatalist] = useState<any>([])
    
  useEffect(() => {
    let timer = setTimeout(() => {
      update()
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  /**
   * 根据上下页点击页数的变化而变化
   *  */
  const update = () => {
    // 设置总页数
    paging.totalPage = Math.ceil(articlesAPI.length / paging.pageSize || 1)
    let before = (paging.current - 1) * paging.pageSize
    let after  = paging.current * paging.pageSize
    // 分割内容
    setDatalist(articlesAPI.slice(before, after))
  }
  return (
    <section className="Content">
        {/* 文章列表 */}
        <ContentArticle datalist={datalist}></ContentArticle>
        {/* 分页 */}
        <AppPaging paging={paging} update={update}></AppPaging>
    </section>
  )
}

export default AppContent
