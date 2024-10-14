import React, { useState } from 'react'
import Button from '@mui/material/Button';

const App = () => {

   const [task,setTask] = useState("")
   const [taskList,setTaskList] = useState([])

   const addButton = () =>{
     setTaskList([...taskList,task])
     localStorage.setItem("task",JSON.stringify([...taskList,task]))
   }

   const deleteClick = (id) =>{
    taskList.splice(id,1)
    localStorage.setItem("task",JSON.stringify(taskList))
    const sample = JSON.parse(localStorage.getItem("task")).filter((ele,eleId)=> eleId!==id)
    setTaskList(sample)
   }

   

  return (
    <div style={{marginLeft:"500px",marginTop:"100px"}}>
      <input onChange={(e)=>{setTask(e.target.value)}} placeholder="Add Tasks" style={{height:"30px"}}/>
      <Button onClick={addButton} style={{marginLeft:"20px"}} variant="contained">Add</Button>
      {JSON.parse(localStorage.getItem("task")) ? 
      JSON.parse(localStorage.getItem("task")).map((task,index)=>{
        return <li>{task}<Button onClick={()=>deleteClick(index)} style={{marginLeft:"20px"}} color="error" variant="contained">Delete</Button></li>
      })
     : [].map(()=>{

     })}
    </div>
  )
}

export default App
