/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import golf from "../../../client/img/golfFinal.png"
import scala from "../../../client/img/skala finale.png"
import fabia from "../../../client/img/skoda final.png";
import Logo from "../../../client/img/icon.ico";

import { Carousel } from "@material-tailwind/react";
import ClockLoader from "react-spinners/ClockLoader";
import emailjs from '@emailjs/browser';

import "../css/style.css";

// NavBar Component
const NavBar = ({ isDarkMode, handleToggle }) => (
  <div className="dark:bg-gray-800">
    <button
      onClick={handleToggle}
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
              <img className="h-7 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Oferta</a>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Echipa</a>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Cursuri</a>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Video</a>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Practica</a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="hidden items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-blue-700 sm:inline-flex">
              Contacați-ne
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Intro Component
const Intro = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center gap-5 py-10 px-4 sm:px-6 lg:px-9">
      <div className="container text-center text-md-left aos-init aos-animate" data-aos="fade-up">
        <h1 className="font-extrabold text-custom-50 text-gray-900 dark:text-white">Fă primul pas spre obținerea permisului de conducere</h1>
        <br />
        <h2 className="text-gray-900 dark:text-white font-thin">Înscrie-te în Școala Auto BRS Autoschool și beneficiază de metodologia care a ajutat peste 5000 de persoane să obțină permisul de conducere.</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 rounded-full">
          Înscrie-te
        </button>
      </div>
    </div>
  </section>
);

// CarouselCars Component
const Caruseli = () => (
  <section className="bg-white dark:bg-gray-900">
    <>
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
    <img
    src={ fabia }
    alt="fabia"
    className="h-full w-full object-cover"
    />
    <img
    src={ scala }
    alt="scala"
    className="h-full w-full object-cover"
    />
    <img
    src={ golf }
    alt="golf 7"
    className="h-full w-full object-cover"
    />
    </Carousel>
    </>
    
    </section>

    
)

// Pricing Component
const Pricing = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Alege varianta care ți se potrivește și începe acum călătoria ta ca șofer </h2>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold"> Limba Română </h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Lecții de teorie În timpul săptămânii </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">1600 MDL</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>3 luni de teorie</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>24 lecții practice de 90 min - 320 lei/lecția - 7680 lei total.</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Mașini cutie manuală - Dacia Sandero, Skoda Fabia</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Mașini cutie automată - Skoda Fabia </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Instructori auto: <span className="font-semibold text-center">10 instructori cu experiență </span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span> Programare individuală a graficului practic </span>
            </li>
          </ul>
          <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Mă înscriu</a>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Limba rusă </h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400"> Lecții de teorie În timpul săptămânii </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">1800 MDL</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span> 3 luni de teorie</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>24 lecții practice de 90 min - 320 lei/lecția - 7680 lei total.</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Mașini cutie manuală - Dacia Sandero, Skoda Fabia</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Mașini cutie automată - Skoda Fabia</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Instructori auto: <span className="font-semibold text-center">10 instructori cu experiență </span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Programare individuală a graficului practic</span>
            </li>
          </ul>
          <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Mă înscriu</a>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Lecții Practice suplimentare</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Cutie mecanica / automata</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold"> 300 MDL </span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Durata 90 min</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Dacă deții permis de conducere</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Dacă ai făcut o școală de șoferi dar nu ai obținut permisul de conducere</span>
            </li>
          </ul>
          <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"> Mă înscriu </a>
        </div>
      </div>
    </div>
  </section>
);

// EmailForm Component
const EmailForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_b550bdp';
    const templateId = 'template_99508au';
    const publicKey = 'u3yYLhuZIyEK-hrjy';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Bogdan Rusu',
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email...', error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Trimite cerere
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Trimiteti o scrisoare in caz ca aveti ceva neclaritati, iar noi va vom contacta imediat
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Numele dvs"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email dvs"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Lasă un comentariu..."
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Expediază
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
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
);

// Main Component
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
              <Caruseli />
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
