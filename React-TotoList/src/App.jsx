import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index-store'
import './style/App.css'

function App() {
  const store = useStore()
  const onChange = (id, e) => {
    // console.log(id);
    // console.log(e.target.value)
    store.taskStore.singleCheck(id, e.target.checked)
  }

  // 全选中
  const allChange = (e) => {
    console.log(e.target.checked)
    store.taskStore.allCheck(e.target.checked)
  }

  // del
  const onDeleteTask = (id) => {
    store.taskStore.deleteTask(id)
  }

  const [taskValue, setTaskValue] = useState('')
  // add
  const addTask = (e) => {
    store.taskStore.addTask({
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      isDone: false,
    })
  }
  return (
    <div>
      <header>
        {/* 勾选框 */}
        <input
          id="toggle-all"
          type="checkbox"
          onChange={allChange}
          checked={store.taskStore.isAll}
        />
        <label htmlFor="toggle-all"></label>
        {/* 添加输入框 */}
        <input
          autoFocus
          autoComplete="off"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          onKeyUp={addTask}
          placeholder="plase input content"
        />
      </header>
      <section>
        <ul>
          {store.taskStore.list.map((item) => (
            <li
              // 只要选中才变红
              className={item.isDone ? 'red' : 'white'}
              key={item.id}>
              <input
                id="toggle-all"
                type="checkbox"
                onChange={(e) => onChange(item.id, e)}
                checked={item.isDone}
              />
              <label htmlFor="toggle-all">{item.name}</label>
              <button onClick={() => onDeleteTask(item.id)}>delete</button>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <span>
          任务总数:{store.taskStore.list.length} 已完成:
          {store.taskStore.isTinishedLength}
        </span>
      </footer>
    </div>
  )
}

export default observer(App)
