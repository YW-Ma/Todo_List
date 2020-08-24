import React from 'react';
import './App.css'

function TodoForm(){
  // 组件1：表单（输入）的组件。
  return (
    <input className="input is-info" type="text" placeholder="Text input"></input>
  );
}

function App() {
  return (
    <div className="app"> {/* 整个App的容器 */}
      <div className="todo-list"> {/* todo-list的容器 */}
        <TodoForm/>
      </div>
    </div>
  );
}

export default App;
