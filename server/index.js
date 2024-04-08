const express =require('express')
const mongoose =require('mongoose')
const cors = require('cors')
const  app=express()
const TodoModel = require('./Models/Todos')
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://vignannh143:Vignan%40143@sinistermonk.redlyzs.mongodb.net/test')
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    
    // Find the todo item by id
    TodoModel.findById(id)
        .then(todo => {
            // Toggle the value of done
            todo.done = !todo.done;
            // Save the updated todo item
            return todo.save();
        })
        .then(updatedTodo => res.json(updatedTodo))
        .catch(err => res.status(500).json({ error: 'Could not update todo', details: err }));
});
app.delete('/delete/:id', (req , res) => {
    const {id}=req.params;
    
    TodoModel.findByIdAndDelete({ _id:id},{ done :true })
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})
app.post('/add',(req,res)=>{ 
    const Task=req.body.Task;
    TodoModel.create({
        Task:Task
    })
    .then(result=> res.json(result))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running")
})
