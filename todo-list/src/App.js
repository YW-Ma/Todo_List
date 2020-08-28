import React, { useState, useEffect} from 'react';
import './App.css'

const deleteIcon = <svg t="1598461455157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2627" width="200" height="200"><path d="M145.875627 257.706667v-31.81568c0-52.749653 41.028267-52.98176 91.50464-52.98176h89.709226l10.76224-122.241707C341.31968 24.58624 364.765867 3.413333 389.87776 3.413333h244.125013c25.115307 0 48.564907 21.172907 52.145494 47.250774l10.765653 122.364586h89.705813c50.59584 0 91.50464 0.23552 91.50464 52.985174v31.812266H145.875627V257.706667z m480.832853-190.784854h-229.410133l-8.492374 105.977174h246.521174l-8.618667-105.977174zM222.068053 406.019413H801.826133c33.491627 0 58.606933-13.868373 55.497387 20.933974l-49.995093 530.240853C804.338347 992 774.314667 1020.586667 740.826453 1020.586667H283.1872c-33.491627 0-63.50848-28.470613-66.49856-63.392427L166.68672 426.953387c-3.109547-34.802347 21.886293-20.933973 55.381333-20.933974z m411.938134 529.759574h91.50464l30.50496-444.94848h-122.002774l-0.006826 444.94848z m-183.005867 0h122.006187V490.830507h-122.006187v444.94848z m-152.620373 0h91.501226V490.830507H267.881813l30.498134 444.94848z" p-id="2628" fill="#ffffff"></path></svg>;
const completeIcon = <svg t="1598460980575" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1870" width="200" height="200"><path d="M511.685973 1020.59008a503.330133 503.330133 0 0 1-291.126613-92.501333l-0.925013-0.641707-1.08544-0.300373a40.349013 40.349013 0 0 1-29.53216-38.867627v-0.221867l-0.320854-4.437333c0.136533-22.114987 18.087253-39.980373 40.195414-40.01792a39.185067 39.185067 0 0 1 29.487786 13.1584l0.457387 0.498347 0.535893 0.392533c73.864533 53.992107 160.894293 82.530987 251.661654 82.530987 236.11392 0 428.212907-192.201387 428.212906-428.445014S747.165013 82.916693 511.051093 82.916693c-236.117333 0-428.21632 192.211627-428.21632 428.45184 0 68.539733 28.197547 152.756907 52.34688 204.055894l0.443734 0.945493 0.7168 0.75776s5.420373 6.49216 8.73472 25.545387l0.273066 3.887786c-0.044373 22.15936-18.04288 40.07936-40.198826 40.034987a40.106667 40.106667 0 0 1-38.56384-29.354667l-0.2048-0.679253-0.354987-0.62464A507.876693 507.876693 0 0 1 3.6864 512.003413c0-135.881387 52.86912-263.60832 148.855467-359.652693C248.53504 56.302933 376.193707 3.40992 512.003413 3.40992s263.461547 52.893013 359.451307 148.9408c95.98976 96.0512 148.85888 223.77472 148.85888 359.652693 0 135.877973-53.121707 263.60832-149.13536 359.635627-96.01024 96.037547-223.709867 148.95104-359.492267 148.95104z m-44.782933-279.606613c-1.088853 0-2.19136 0-3.290453-0.119467h-0.477867a40.372907 40.372907 0 0 1-28.767573-11.75552 33.16736 33.16736 0 0 1-4.939094-7.53664l-1.071786-1.983147-180.288854-178.82112a40.1408 40.1408 0 0 1-11.885226-28.709546 39.471787 39.471787 0 0 1 11.874986-28.11904c15.742293-15.885653 41.373013-16.0256 57.296214-0.324267l158.713173 159.122773 254.962347-253.487786a40.198827 40.198827 0 0 1 28.573013-11.96032 39.355733 39.355733 0 0 1 28.289707 11.874986c15.45216 15.465813 15.03232 40.045227-0.9216 56.0128l-274.13504 274.64704-0.41984 0.7168-1.112747 1.949014a34.0992 34.0992 0 0 1-5.1712 7.533226 37.74464 37.74464 0 0 1-27.22816 10.960214z" p-id="1871" fill="#ffffff"></path></svg>
const uncompleteIcon = <svg t="1598461000549" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2035" width="200" height="200"><path d="M511.996587 1020.586667C231.103147 1020.586667 3.413333 792.84224 3.413333 512 3.413333 231.154347 231.103147 3.413333 511.996587 3.413333 792.89344 3.413333 1020.586667 231.10656 1020.586667 512s-227.7376 508.586667-508.59008 508.586667z m0-940.885334C273.24416 79.691093 79.68768 273.24416 79.68768 512c0 238.752427 193.55648 432.295253 432.308907 432.295253 238.75584 0 432.295253-193.55648 432.295253-432.295253 0-238.742187-193.55648-432.308907-432.295253-432.308907v0.01024z" p-id="2036" fill="#ffffff"></path></svg>;

// 创建一个初始的todo列表，展示它
const INIT_TODOS = [ 
  {
    text: 'learn react',
    isComplete: false,
  },
  {
    text: 'meet cat',
    isComplete: false,
  },
  {
    text: 'build todo project',
    isComplete: false,
  },
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

function Todo({ text, isComplete, index, removeTodo, finishTask }) { // 组件：每个待做项
  // 逻辑部分
  console.log(text)
  // 返回的结构部分
  return(
    <div className = "todo" onClick = {(e)=>finishTask(e,index)}>
      <div 
        className = "task" 
        style = {
          {textDecoration: isComplete ? 'line-through' : ''}
      }>
        {
          isComplete ? completeIcon : uncompleteIcon
        }
        <div>{text}</div>
      </div>
      <a className = "remove" href="#!" onClick={(e)=>removeTodo(e,index)}>
        {deleteIcon}
      </a>
    </div>

  )
}

function App() {
  // 逻辑部分
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || INIT_TODOS) // 只有当parse返回空值的时候才设置为INIT_TODOS
  useEffect(
    ()=>{localStorage.setItem('todos', JSON.stringify(todos));}, //第一个参数，监视对象发生变化时触发的函数。
    [todos] //第二个参数，监视的对象。一定要把被监测的东西放在[]里。
  ); 

  const addTodo = (text) => {
    setTodos([{text, isComplete:false}, ...todos]);
  }

  const removeTodo = (e, index) => {
    e.preventDefault()
    e.stopPropagation()
    let newTodos = [...todos]; // 不能够直接 = todos 这是为什么？？？ 数组引用传递
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  const finishTask = (e, index) =>{
    let newTodos = [...todos];
    newTodos[index].isComplete = newTodos[index].isComplete ? false : true;
    setTodos(newTodos);
  }

  // 返回的结构部分
  return (
    <div className="app"> {/* 整个App的容器 */}
      <div className="todo-list"> {/* todo-list的容器 */}
        <TodoForm addTodo = {addTodo}/>
        {
          todos.map((todo, index)=>( 
            <Todo 
              text = {todo.text}
              isComplete = {todo.isComplete}
              index = {index}
              removeTodo = {removeTodo}
              finishTask = {finishTask}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;