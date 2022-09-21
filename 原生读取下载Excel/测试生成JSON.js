const fs = require('fs')
const path = require('path')

let datalist = []

/**
 * @params item:遍历的成员
 * @params item:分格的符号
 * @explain 在 push下添加成员,下标按顺序写下即可。
 *  */
function handleSplitPush (item) {
  datalist.push({
    A1: item.split(mark)[0],
    B1: item.split(mark)[1],
    C1: item.split(mark)[2],
    D1: item.split(mark)[3],
    NN: item.split(mark)[4],
  })
}
/***
 * 读取操作
 *  */
try {
  let data = fs.readFileSync(path.join(__dirname, './原数据/测试文本.txt'), "utf-8").split('\r\n')
  // 遍历
  data.forEach((item) => {
    handleSplitPush(item, ',')
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