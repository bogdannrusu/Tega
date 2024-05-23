/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

function AddElevi() {

  const navigate = useNavigate()
  return (
    <>
    <h2 className='text-center my-10'>Add Elevi Component</h2>
    <Button 
     variant="outlined"  
     className='bg-black font-mono text-wrap rounded-md text-white'
     onClick={() => navigate('/home')}>Back</Button>
        
    </>

  )
}

export default AddElevi