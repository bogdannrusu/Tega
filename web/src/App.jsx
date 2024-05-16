/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWeb from './components/LoginWeb';
import Main from './components/Main';

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/login' element={<LoginWeb />} />
    </Routes>
    </Router>
    </>

  )
}

export default App