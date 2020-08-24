import React, { useState } from 'react';
import './App.css'

function TodoForm() {
  // 组件1：表单（输入）的组件。
  // 利用state来存取值，而不是用getelementbyid
  // HTML form标签，用于向服务器传输数据。 它包含的可以不只是一个input。
  //                它有一个onsubmit event来提交表单。可以定制它。

  const [content, setValue] = useState('123');
  const handleSubmit = (e) => {
    e.preventDefault();// 阻止后续默认行为
    console.log(content);// 提交表单时log一下值
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        className="input is-info"
        type="text"
        placeholder="Text input"
        onChange={
          (e) => {
            setValue(e.target.value)
          }
        } //把event参数中的值，setvalue到state的值里。
      />
    </form>
  );
}

function App() {
  return (
    <div className="app"> {/* 整个App的容器 */}
      <div className="todo-list"> {/* todo-list的容器 */}
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
