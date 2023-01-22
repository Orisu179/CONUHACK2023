import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import TaskList from './TaskList';

const Items = () =>{
  return (
          <React.fragment>
            <ListItemButton onClick={TaskList.handleUserChange()}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Switch view" />
            </ListItemButton>
          </React.fragment>
  )
}

export default Items;
