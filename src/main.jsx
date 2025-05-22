import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SongList from './components/SongList.jsx';
import TodoList from './components/TodoList.jsx'


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <Router>
        <nav>
          <Link to="/">Todos</Link> | <Link to="/songs">Songs</Link>
        </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/songs" element={<SongList />} />
      </Routes>
    </Router>
    </Provider>
    
 
)
