/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddElevi from './components/AddElevi';
import DeleteElevi from './components/DeleteElevi';
import ViewElevi from './components/ViewElevi';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/add_elevi' element={<AddElevi />} />
      <Route path='/delete_elevi' element= {<DeleteElevi />} />
      <Route path='/view_elevi' element= {<ViewElevi />} />
    </Routes>
   </Router>
  )
}

export default App