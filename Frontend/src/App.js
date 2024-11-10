import logo from './logo.svg';

import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Register from './Components/Register';
import Login from './Components/Login';
import Chat_page from './Components/Chat_page';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import StartInterview from './Pages/StartInterview';

function App() {
  return (
  <>
    
 
    
    <Router>
    <Header/>
    
    <Routes>
            <Route path="/" element={<Chat_page/>}></Route>
            <Route  path="/login" element={<Login/>} />
            <Route  path="/register" element={<Register/>} />
            <Route path='/startinterview' element={<StartInterview/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/faq' element={<FAQ/>}></Route>
                
    </Routes>
    </Router>

    </>
  );
}

export default App;
