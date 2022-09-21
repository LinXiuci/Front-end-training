const inputName = document.getElementById('inputName')
const button = document.querySelector('button')

let datalist = []

// 读取输入的文件名
let excelName = ''
inputName.oninput = function () {
  excelName = this.value
}

// 是否禁用
function handledisabled (value, color) {
  button.disabled = value
  button.style.background = color
}
handledisabled(true, '')

// 读取文件
function handleFile (files) {
  if (files.length) {
    let file = files[0]
    let reader = new FileReader()
    // 启用button
    handledisabled(false, '#07C160')
    reader.onload = function () {
      readFileSync(this.result)
    }
    reader.readAsText(file)
  }
}

function readFileSync (receiveData) {
  let data = receiveData.split('\r\n')
  // 遍历
  data.forEach((item) => {
    handleSplitPush(item, ',')
  })
}

// 打印 Excel
function printToExcel () {
  let _columnName = columnName + '\n'
  //增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < datalist.length; i++) {
    for (let item in datalist[i]) {
      _columnName += `${datalist[i][item] + '\t'},`
    }
    _columnName += '\n'
  }
  //encodeURIComponent解决中文乱码
  let uri = 'data:text/xls;charset=utf-8,\ufeff' + encodeURIComponent(_columnName)
  //通过创建a标签实现
  var link = document.createElement('a')
  link.href = uri
  //对下载的文件命名
  link.download = excelName + '.xls'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}