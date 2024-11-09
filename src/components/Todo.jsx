import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );
  

  //Update LocalStorage

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

    //Add New Task

    const inputRef = useRef();

    const addTask = () => {
        const inputTask = inputRef.current.value.trim();
        if(inputTask===""){
            return null;
        }
        const newTodo = { 
            id: Date.now(),
            text: inputTask,
            isComplete:false
        }
        setTodoList((prev)=>[...prev, newTodo])
        inputRef.current.value=""
    }

    // Update Todo Task

    const finishedTask = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            });
        });
    };


    // Delete Todo Item

    const deleteTodo = (id) => {
        setTodoList((prev)=>{
            return prev.filter((todo)=> todo.id !== id);
        })
    }

  return (
    <div className="w-[30-rem]">
        <h1 className="text-lg my-2 text-amber-500">To-do List</h1>
        <div className='flex gap-2'>
            <div className='flex-1'>
                <input ref={inputRef} type="text" className='px-3 py-4 w-full text-sm border focus:outline-none
                focus:border-pink-500' placeholder="Add your Task" name='' id=''/>
            </div>
            <button className='py-3 px-4 bg-blue-600 text-white
             hover:bg-blue-700 text-sm font-medium rounded-sm border-none' onClick={addTask}>Add Task</button>
        </div>
        <p className='my-3 text-sm text-white px-1 '>Fill Task details</p>

        <div className='w-[30-rem] bg-white shadow py-6 px-4'>
            <fieldset>
                <legend className='text-pink-600 font-medium text-lg'>List of tasks</legend>
                    {todoList.length===0?(<p className='text-center text-red-700 text-sm'>No Available Tasks</p>)
                    :(
                        todoList.map((todo,index)=>{ 
                            return <TodoItem text={todo.text} key={index} 
                            isComplete={todo.isComplete} id={todo.id} 
                            finishedTask={finishedTask}
                            deleteTodo={deleteTodo}
                            />
                        })
                    )}
            </fieldset>
        </div>

    </div>
  )
}

export default Todo
