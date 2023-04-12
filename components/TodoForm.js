import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {
  const [input,setInput] =useState('');
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  const handleChange = e =>{
    setInput(e.target.value);
  } ;

  const handleSubmit = e =>{
    e.preventDefault();
    props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text:input
   });
   setInput('');
  };
  return (
    <div>
        <form class="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="add a todo" 
            value={input} name='text' class='todo-input'
            onChange={handleChange}
            ref={inputRef}/>
            <button class="todo-button">add todo</button>

        </form>
    </div>
  )
}

export default TodoForm