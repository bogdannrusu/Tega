/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../client/img/icon.ico";
import ClockLoader from "react-spinners/ClockLoader";
import "../css/style.css";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  //SetTimerForComponents
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const openLoginWeb = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      navigate('/login');
    }, 1000); // Adjust the delay as needed
  }

  //ToggleDarkMode
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

  // Navbar
  const NavBar = ({ openLoginWeb }) => {
    return (
      <>
      <div className="dark:bg-gray-800"> 
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
          <div className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src={ Logo } alt="" />
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Oferta</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Echipa</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Cursuri</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Video</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Practica</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Contact</a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={ openLoginWeb }
                className="hidden items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-black sm:inline-flex"
              >
                Conecteaza-te
              </button>
            </div>     
          </div>
        </div>
       </div>
      </div>
      </>
      
    );
  };

  // MainContainer
  const ContainerInfo = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10 px-4 sm:px-6 lg:px-9">
        <div className="container text-center text-md-left aos-init aos-animate" data-aos="fade-up">
          <h1 className="font-bitter text-custom-50">Fă primul pas spre obținerea permisului de conducere</h1>
          <br />
          <h2 className="font-bitter">Înscrie-te în Școala Auto Artur Cecan și beneficiază de metodologia care a ajutat peste 10.000 de persoane să obțină permisul de conducere.</h2>
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="ToggleDarkMode">
     <div>
      {loading || buttonLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ClockLoader color={'#4B0082'} loading={true} size={50} />
        </div>
      ) : (
        <>
          <NavBar openLoginWeb={openLoginWeb} />
          <hr /><br /><br /><br /><br /><br />
          <ContainerInfo />
        </>
      )}
    </div>
    </div>
    
    </>
    
  );
  
}
