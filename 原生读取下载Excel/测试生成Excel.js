const fs = require('fs')
const path = require('path')


let datalist = []



/***
 * 读取操作
 *  */
try {
  let data = fs.readFileSync(path.join(__dirname, './原数据/测试文本.txt'), "utf-8").split('\r\n')
  // 遍历
  data.forEach((item) => {
    datalist.push({
      "序号": item.split('，')[0] || item.split(' ')[0],
      "站名": item.split('，')[1] || item.split(' ')[1],
      "册": item.split('，')[2]  || item.split(' ')[2],
      "电场强度最大值": item.split('，')[3] || item.split(' ')[3],
    })
  })
  console.log('转换成功')
  console.log(datalist)
} catch (error) {
  console.log(error.message)
}

/***
 * 写入操作
 *  */
try {
  fs.writeFileSync(path.join(__dirname, './生成文件/测试生成文件.json'), JSON.stringify(datalist), { flag: 'w+' })
  console.log('转换json格式文件完毕')
} catch (error) {
  console.log(error.message)
}