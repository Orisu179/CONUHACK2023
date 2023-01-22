import React from 'react'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import Task from './Task'
import Typography from '@mui/material/Typography'

const TaskList = (isManager : bool) => {
  const [task, setTask] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newUser, setNewUser] = useState('')

  let result = task

  useEffect(() =>
    axios.get('http://localhost:3000/task').then(response => {
      setTask(response.data)
    })
  )

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleDescChange = (event) => {
    setNewDesc(event.target.value)
  }

  const handleUserChange = (event) =>{
    setNewUser(event.target.value)
  }

  return (
          <Task result={result}/>
  
  )
}