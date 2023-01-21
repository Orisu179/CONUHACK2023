import ReactDOM from 'react-dom/client'
import {Typography} from '@mui/material'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'

const Task = (result) => {
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

export default Task



