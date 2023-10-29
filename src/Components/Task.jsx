/* eslint-disable react/prop-types */
import {AiOutlineDelete} from 'react-icons/ai'
export default function Task({task, completed, index, toggle:handleToggle, delete:handleDelete}) {
    return (
        <div className='flex items-center w-3/6 space-x-36 m-auto justify-between'>
            <div className='flex items-center gap-7'>
                <div className='rounded-full  bg-gradient-to-r from-sky-500 to-indigo-500 p-3 '>
                    <input type="checkbox"
                           name="checkbox"
                           className='border-none w-10 h-10 rounded text-9xl'
                           checked={completed}
                           onChange={() => handleToggle()}
                    />
                </div>
                <p className={`font-mono text-2xl ${completed ? 'line-through' : ''}`}>{task}</p>
            </div>
            <div onClick={() => handleDelete(index)} className='rounded-ful bg-gradient-to-r from-purple-500 to-pink-500  p-3'>
                <AiOutlineDelete className='cursor-pointer text-white text-3xl'/>
            </div>
        </div>
    );
}
