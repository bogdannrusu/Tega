/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddElevi from './components/AddElevi';
import DeleteElevi from './components/DeleteElevi';
import ViewElevi from './components/ViewElevi';
import { RequireAuth } from "react-auth-kit";


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/add_elevi' element={<AddElevi />} />
      <Route path='/delete_elevi' element= {<DeleteElevi />} />
      <Route path='/view_elevi' element= {<ViewElevi />} />
    </Routes>
   </Router>
  )
}

export default App