import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setvalue]=useState("")
  const handleSubmit=e=>{
      //to stop page reload
      e.preventDefault();
      addTodo(value)  //pass state from todoform to todowrapper
      setvalue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text'className='todo-input'value={value}placeholder='what is task today'onChange={(e)=>setvalue(e.target.value)}/>
      <button type='submit'className='todo-btn'>Add Task</button>
    </form>
  )
}
