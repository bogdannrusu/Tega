/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "../../../client/img/icon.ico";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">BRS Autoschool</span>
        </p>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Oferta</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Echipa</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Cursuri</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Video</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Practica</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://instagram.com/bogdann_rusu" className="hover:underline">Bogdan Rusu™</a>. All Rights Reserved.</span>
    </div>
  </footer>
  )
}

export default Footer