import React from 'react'

const TodoItem = (props) => {
  return (
    <>
      <div className='flex justify-between items-center gap-2'>
                    <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer 
                    select-none ${props.isComplete ? "line-through text-slate-600" : ""}`} 
                    onClick={() => props.finishedTask(props.id)}>{props.text}</label>
            <div onClick={() => props.deleteTodo(props.id)}>
                <svg className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    </>
  )
}

export default TodoItem
