import React from 'react';
import {Container, Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Containers() {
  return (
    <div>
      <Container maxWidth="xs" sx={{background:'yellow'}}>
        <Typography variant="h2">naila shah xs</Typography>
      </Container>
      <Container maxWidth="sm" sx={{background:'orange'}}>
        <Typography variant="h2">naila shah sm</Typography>
      </Container>
      <Container maxWidth="md" sx={{background:'green'}}>
        <Typography variant="h2">naila shah md</Typography>
      </Container>
      <Container maxWidth="lg" sx={{background:'red'}}>
        <Typography variant="h2">naila shah lg</Typography>
      </Container>
      <Container maxWidth="xl" sx={{background:'pink'}}>
        <Typography variant="h2">naila shah xl</Typography>
      </Container>
      
      
      

    </div>
  )
}

export default Containers
