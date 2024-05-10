/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios';
const { ipcRenderer } = window.require('electron');

function Login() {

   const [isOpen, setIsOpen] = useState(false);
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const toggleModal = () => {
    setIsOpen(!isOpen);
  };

   const handleCloseApp = () => {
   ipcRenderer.send('close-app');
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

 try {
  const response = await axios.post('http://localhost:5000/login', { login, password });
  console.log(response.data);
  // Handle successful login, redirect user, etc.
} catch (error) {
  console.error(error.response.data);
  // Handle login error, display message to user, etc.
}
};


  return (
    <>
     <div>
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-red-700 hover:bg-coral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-coral-800 mt-2 mr-2"
        type="button"
        onClick={toggleModal}
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        X
      </button>
      {isOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  Sunteti sigur ca vreti sa iesiti din aplicatie?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={handleCloseApp}
                >
                 Da, sunt sigur
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  onClick={toggleModal}
                >
                  Nu, anuleaza
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="text-center mt-24">
      <div className="flex items-center justify-center">
         <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
         </svg>
         
      </div>
      <h2 className="text-4xl tracking-tight">
         
      </h2>
</div>
<div className="flex justify-center my-2 mx-4 md:mx-0">
   <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 align-bottom">
      <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Password'>Username</label>
            <input type="login" value={login} onChange={(e) => setLogin(e.target.value)} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" required />
         </div>
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Password'>Parola</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" required />
         </div>
         <div className="w-full md:w-full px-3 mb-6">
            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Conectare</button>
         </div>
      </div>
   </form>
</div>
    </>
  )
}

export default Login