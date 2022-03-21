import { computed, makeAutoObservable } from 'mobx'

class TaskStore {

  list = [
    { id: 1, name: 'React', isDone: false },
    { id: 2, name: 'vue', isDone: false },
    { id: 3, name: 'mokx', isDone: true }
  ]

  constructor() {
    makeAutoObservable(this, {
      isAll: computed
    })
  }

  //单选操作
  singleCheck = (id, checked) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = checked
  }

  // 全选操作
  allCheck = (checked) => {
    this.list.forEach(item => {
      item.isDone = checked
    })
  }

  // 只有所有子项选中的时候,才是选中的状态
  get isAll () {
    return this.list.every(item => item.isDone)
  }

  get isTinishedLength () {
    return this.list.filter(item => item.isDone).length
  }

  // 删除
  deleteTask = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }

  //添加
  addTask = (task) => {
    this.list.push(task)
  }
}

const taskStore = new TaskStore()

export default taskStore