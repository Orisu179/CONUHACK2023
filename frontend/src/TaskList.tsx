import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box'
import Task from './Task';
import axios from 'axios';
import TaskService from './TaskService';

const TaskList = (isManager : bool) => {
  const [task, setTask] = useState([])
  const [userType, setUserType] = useState(isManager)  //true = manager, false = intern
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newUser, setNewUser] = useState('')
  const [NewisDone, setIsDone] = useState('false')
  const [rating, setRating] = useState(0)

  let result = task;

  useEffect(() => {
      TaskService
      .getAll()
      .then(initialTask => {
        setTask(initialTask)
      })
      .catch(error => {
        console.log('fail to get data')
      })
    }, [])

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleDescChange = (event) => {
    setNewDesc(event.target.value)
  }

  const handleUserChange = (event) =>{
    setNewUser(event.target.value)
  }

  const handleUserTypeChange = () => {
    setUserType(!userType)
  }

  const handleDoneChange = (id) =>{
    setIsDone(!isDone)
    const taskObject = {
      title: newTitle,
      desc: newDesc,
      user: newUser,
      isDone: NewisDone
    }
    TaskService.update(id, taskObject)
  }
  const addTask = (event) =>{
    event.preventDefault()
    const taskObject = {
      title: newTitle,
      desc: newDesc,
      user: newUser,
      isDone: NewisDone
    }

    TaskService
      .create(taskObject)
      .then(returnedTask => {
        setTask(task.concat(returnedTask))
        setNewTitle('')
        setNewDesc('')
        setNewUser('')
        setIsDone(false)
      })
  }
  if(userType)
    return (
            <Stack direction="row" spacing={2}>
      <TextField color="primary" label="task name" variant="outlined" onChange={handleTitleChange} />
      <TextField color="primary" label="description" variant="outlined" onChange={handleDescChange} />
      <Button variant="outlined" color="secondary" onClick={addTask}>Add</Button>
      <Box component="span" sx={{ p:2 }}>
        <Typography variant="p">what you have entered is {newTitle} and {newDesc}</Typography>
      </Box>
    </Stack>
    )

  else
    return ( <Task result={result} isManager={false} />)
  //return (<Typography variant="h1"> hello world </Typography>)
}

export default TaskList;
