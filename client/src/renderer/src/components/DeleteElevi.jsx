/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeleteElevi() {
    const navigate = useNavigate();
    
  return (
    <>
    <h2 className='text-center my-10'>Delete Elevi Component</h2>
    <button 
    className='bg-black font-mono text-wrap rounded-md text-white'
     onClick={() => navigate('/dashboard')}

    > Inapoi </button>
        
    </>

    
  )
}

export default DeleteElevi