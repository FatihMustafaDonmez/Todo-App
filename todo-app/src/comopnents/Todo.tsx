import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, uptadeTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType 
}

function Todo({todoProps}: TodoProps) {
    const {id,content} = todoProps;
    const dispatch = useDispatch();

    const [editable,setEditable] = useState<boolean>(false);
    const [newTodo,setNewTodo] =useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUptadeTodo = () =>{
        const payload: TodoType ={
            id: id,
            content: newTodo
        }
        dispatch(uptadeTodo(payload));
        setEditable(false);
    }

  return (
    <div className='todos'>
        {editable ? <input type="text" style={{width: '85%', border:'none', borderBottom:'1px solid lightgrey', outline:'none' }} value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/> : <div>{content}</div> }
     <div>
     <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{marginRight: '8px'}}/>
     {editable ? <FaCheck className='icons' onClick={handleUptadeTodo}/> : <FaRegEdit onClick={()=> setEditable(true)} className='icons'/>}
     
     </div>
    </div>
  )
}

export default Todo
