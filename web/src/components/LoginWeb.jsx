/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Logo from "../../../client/img/logo.png";


export default function LoginWeb() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('dark-mode', newMode);
  };

  return (
   <>
     <section className="bg-white dark:bg-gray-900">
   <button
        onClick={ handleToggle }
        className="absolute top-4 right-4 h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          className={`fill-violet-700 ${isDarkMode ? 'hidden' : 'block'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          className={`fill-yellow-500 ${isDarkMode ? 'block' : 'hidden'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
 <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-60 w-60" src={Logo} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Conectare cu contul dvs</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="login" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Username</label>
        <div className="mt-2">
          <input id="login" name="login" type="login" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Parola</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Conectare</button>
      </div>
    </form>
  </div>
</div>
</section>
   </>
  )
}
