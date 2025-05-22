import React from 'react';
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './components/TodoList';
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
