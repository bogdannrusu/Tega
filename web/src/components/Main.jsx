/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

import Carousel from "./Carousel"
import  NavBar  from "./modal/Navbar"
import  Intro from './Intro'
import  Pricing  from "./Pricing"
import  EmailForm  from "./EmailForm"
import  Footer  from "./Footer"
import "../css/style.css";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // SetTimerForComponents
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // ToggleDarkMode
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
    <section className="bg-white dark:bg-gray-900">
      <div className="ToggleDarkMode">
        <div>
          {loading || buttonLoading ? (
            <div className="flex items-center justify-center h-screen">
              <ClockLoader color={'#4B0082'} loading={true} size={50} />
            </div>
          ) : (
            <>
              <NavBar isDarkMode={isDarkMode} handleToggle={handleToggle} />
              <hr /><br /><br /><br /><br /><br />
              <Intro />

              <Pricing />
              <EmailForm />
              <Footer />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
