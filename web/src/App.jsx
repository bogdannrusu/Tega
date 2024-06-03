/* eslint-disable no-unused-vars */
import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Main />} />
    </Routes>
    </Router>
    </>

  )
}

export default App