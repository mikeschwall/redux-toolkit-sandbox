import React from 'react';
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './components/Todolist';
import SongList from './components/SongList';



function App() {
  

  return (
    <React.Fragment>
  <CssBaseline />
  <SongList/>
  <hr/>
  <TodoList/>
</React.Fragment>
  )
}

export default App
