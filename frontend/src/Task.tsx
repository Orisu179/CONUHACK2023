import React from 'react'
import { useState } from 'react'
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const Task = props => {
  const [user, setUserName] = (props.result.user)
  const [isManager, setManager] = (props.isManager)


  const ButtonActive = (isDone : bool) => {
    if(isDone)
      return(
              <Button > finished </Button>
      )
  }

  const changeState = (event) => {

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
}

export default Task;
