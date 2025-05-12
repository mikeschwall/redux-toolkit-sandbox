import React from 'react';
import './App.css'
//import * as containerStyles from "./App.module.css"
import { CssBaseline } from '@mui/material'
import TodoList from './components/TodoList';
import SongList from './components/SongList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

/*
<div style={{textAlign:"left"}}>
    <SongList></SongList>
    <hr/>
  <TodoList></TodoList>
  </div>
*/

function App() {
  const [value, setValue] = React.useState('Songs');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
  <CssBaseline />
  test
</React.Fragment>
  )
}

export default App
