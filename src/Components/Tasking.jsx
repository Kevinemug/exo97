/* eslint-disable react/no-unescaped-entities */
import {RiAddLine} from 'react-icons/ri'
import { useRef, useState } from 'react'
import Task from './Task'
import Modal from './Modal'


export default function Tasking(){

    const [tasks,setTasks] = useState([])
    const [inputValue,setInputValue] = useState('')
    const [completed,setCompleted] = useState(false)
    const inputRef =useRef()
   
    const handleTaskAdd = () =>{
        if(inputValue.trim() === '')return;
        setTasks([...tasks,inputValue.trim()])
        inputRef.current.focus()
        setInputValue('')
        console.log(inputValue)
    }
    const handleTaskDelete = (indexToDelete) => {
        const newTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(newTasks);
    }
    const handleComplete = () =>{
        setCompleted(!completed)
    }
    
        
    return(
        <>
        <div className='w-4/5 m-auto flex flex flex-col gap-16 items-center justify-center'>
            <h1 className='font-mono text-5xl text-[#f06]'>Kevine's Stuffs</h1>
            <div className=" w-4/5  h-11 flex items-center gap-9">
                <input
                 name='input' 
                 type="text"
                 ref={inputRef}
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                  className="dramatic-input" />
            <div
            onClick={handleTaskAdd }
            className='bg-gradient-to-r from-purple-500 to-pink-500 rounded w-[50px] rounded-full p-2'>
                <RiAddLine className='text-white text-3xl'/>
                </div>
            </div>
                {tasks.map((task,index )=> <Task
                 key={index}
                 index ={index}
                 completed={completed}
                 toggle={handleComplete}
                 delete={handleTaskDelete}
                  task={task}/>)}
{tasks.length === 0 ? <Modal/> :null}
        </div>
        </> 
    )
}