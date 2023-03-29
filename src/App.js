import React,{useState} from 'react'
import './App.css';
import { Typography, Button, TextField, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import SnackBarr from './components/SnackBarr';
function App() {
  const [value,setValue]=useState(0);
  const handleChange=(e,newValue)=>{
    console.log(newValue);
    setValue(newValue)
  }
  return (
    <div className="App">

       <AppBar>
        <Toolbar>
        <Typography variant="h5">Naila shah</Typography>
        <Tabs 
        onChange={handleChange}>
          <Tab label="Home" index={0}/>
          <Tab label="About" index={1}/>
          <Tab label="Contact" index={2}/>
        </Tabs>
        </Toolbar>
       </AppBar>       
     <br/>
     <br/>
     <SnackBarr/>
    </div>
  );
} 

export default App;
