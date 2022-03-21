import React from 'react'

import taskStore from './task-store'

class IndexStore {
  constructor() {
    this.taskStore = taskStore
  }
}

const indexStore = new IndexStore()
const context = React.createContext(indexStore)
const useStore = () => React.useContext(context)
export { useStore }