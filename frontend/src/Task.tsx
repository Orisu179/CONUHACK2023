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

const Task = props => {
  const [user, setUserName] = ('')
  const [isManager, setManager] = (props.isManager)
  const [isDone, setIsDone] = (false);

  const filtered = props.result.filter((result.user === user))
  const ButtonActive = (isDone : bool) => {
    if(!isDone)
      return(
              <Button onClick> Finished </Button>
      )
    else
        return (
                <Button disabled> Finished </Button>

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
                      <TableRow key=row.id>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell>{row.isDone}</TableCell>
                      </TableRow>
                      ))}
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
                <TableCell>Finished</TableCell>
                <TableCell> </TableCell>
                <TableCell> Rating </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((row) => (
                      <TableRow key=row.id>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell>{row.isDone}</TableCell>
                        <ButtonActive isDone={row.isDone} />
                      </TableRow>
                      ))}
            </TableBody>
          </Table>
      )
}

export default Task;
