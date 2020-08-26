import React, { useState } from 'react';
import './App.css'

// 创建一个初始的todo列表，展示它
const INIT_TODOS = [ 
  'learn react',
  'meet cat',
  'build todo project',
]

function TodoForm({addTodo}) { // 组件：表单（输入）
  // 逻辑部分
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();// 阻止后续默认行为
    if (!content) return; // 空输入框提交时不建立新待做项
    addTodo(content);
    setContent('') // 提交后清空输入框
  }
  // 返回的结构部分
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        className="input is-info"
        type="text"
        placeholder="Text input"
        onChange={
          (e) => {
            setContent(e.target.value)
          }
        } //把event参数中的值，setContent到state的值里。
      />
    </form>
  );
}

function Todo({ todoValue }) { // 组件：每个待做项
  // 逻辑部分
  console.log(todoValue)
  // 返回的结构部分
  return(
    <div className="todo">{todoValue}</div>
  )
}

function App() {
  // 逻辑部分
  const [todos, setTodos] = useState(INIT_TODOS)
  const addTodo = (text) => {
    setTodos([text, ...todos])
  }
  // 返回的结构部分
  return (
    <div className="app"> {/* 整个App的容器 */}
      <div className="todo-list"> {/* todo-list的容器 */}
        <TodoForm addTodo = {addTodo}/>
        {
          todos.map((todo)=>( 
            <Todo todoValue = {todo}></Todo>
          ))
        }
      </div>
    </div>
  );
}

export default App;