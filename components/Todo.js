import React,{useState} from 'react'
import TodoForm from './TodoForm'



function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })
    const submitUpdate =value =>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:''
        });
    };
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
  return todos.map ((todo,index) =>(
    <div class={todo.isComplete ? 'todo-row complete ' : 'todo-row'}
 key={index} >
    <div key={todo.id} onclick={() => completeTodo(todo.id)}>
        {todo.text}
    </div>
    <div class="icons">
       <button onClick={()=> removeTodo(todo.id)} class='delete-icon'>delete</button> 
       <button onClick={()=> setEdit({id:todo.id,value:todo.text})} class='edit-icon'>edit</button>
    </div>

 </div>
  )
    
  )
}

export default Todo