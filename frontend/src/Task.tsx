import React from 'react';
import { useState } from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import TaskList from "./TaskList";
import TaskService from "./TaskService";

const Task = ({ result, isManager }) => {
  const [user, setUserName] = ('')
  const [isManager, setManager] = (isManager)

  const filtered = props.result.filter((result.user === user))
  const ButtonActive = (isDone : bool, id : int) => {
    const [Done, setDone] = (isDone)
      return(
              <Button onClick={TaskList.handleDoneChange(id)} onClick={setDone(!isDone)} disabled={isDone}> Finished </Button>
      )
  }

  const changeState = (event) => {
    TaskService.update(props.result )
  }

  if(isManager)
    return (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Finished</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell>{row.isDone}</TableCell>
                      </TableRow>
                      ))}
              <TextField color="primary" label="task name" variant="outlined" onChange={handleTitleChange} />
              <TextField color="primary" label="description" variant="outlined" onChange={handleDescChange} />
              <Button variant="outlined" color="secondary" onClick={addTask}>Add</Button>
            </TableBody>
          </Table>
    )
  else
      return (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>Description</TableCell>
                <TableCell> </TableCell>
                <TableCell> Rating </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((row) => (
                      <TableRow key=row.id>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.desc}</TableCell>
                        <ButtonActive isDone={row.isDone} id={row.id} />
                      </TableRow>
                      ))}
            </TableBody>
          </Table>
      )
}

export default Task;
