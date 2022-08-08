import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import Home from './Pages/Home'
import React , {useState} from 'react'
import './App.css';
function App() {
  const [email, setEmail] = useState({})
  return (
    <BrowserRouter>
    <nav>
    <Link to={'/'}>Home</Link>
    </nav>
    <main>
      <Routes>
        <Route exact path={'/'} element ={<Home/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;