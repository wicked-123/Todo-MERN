import React, { useState } from 'react'
import axios from 'axios'
function Create() {
    const [Task,setTask]=useState()
    const handleAdd = ()=>{
        axios.post('http://localhost:3001/add',{Task: Task})
        .then(location.reload())
        .catch(err=>console.log(err))
    }

    return(
        <div className='flex'>
            <input type='text' name='' id='' placeholder='EnterTask' onChange={(e)=>setTask(e.target.value)} />
            <button type='button' onClick={handleAdd}>add</button>
        </div>
        
    )
}
export default Create;