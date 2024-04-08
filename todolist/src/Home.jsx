import React, { useState } from 'react'
import Create from './Create';
import { useEffect } from 'react';
import axios from 'axios';
function Home() {
    const [Todos,setTodos]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result =>setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit = (id) =>{
        axios.put('http://localhost:3001/update/'+id)
        .then(location.reload())
        .catch(err => console.log(err))

    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(locatoin.reload())
        .catch(err=>console.log(err))
    }
    

    return(
        <div className='fle'>
            <div className='Heading'>Todo list</div>
            <Create />
            {
                Todos.length ===0 ? <div>no list</div> 
                : 
                Todos.map(todo=>(
                    <div key={todo._id} onClick={() => handleEdit(todo._id)} className='flex box'>
                    <div>
                    <input  type="checkbox" checked={todo.done} />
                    <span class="custom-checkbox"></span>
                    </div>
                    <div className='flex'>
                    <div className={todo.done ? 'strike' : 'normal'} id='text'>
                    {todo.Task}
                    </div>
                    <div onClick={() =>handleDelete(todo._id)}><img className='delete' src='../public/delete.png' /> </div>
                    </div>
                    </div>
                ))
            }


        </div>
        
    )
}
export default Home;