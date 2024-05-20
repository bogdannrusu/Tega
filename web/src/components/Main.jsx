/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../client/img/icon.ico";
 
export default function Main() {
  const navigate = useNavigate();

  const openLoginWeb = () => {
    navigate('/login');
  }

  //Navbar
 const NavBar = () => {
    return(
    <div
    className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-7 w-auto" src={Logo} alt="" />
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Oferta</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Echipa</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Cursuri</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Video</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Practica</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Contact</a>
            </div>
            <div className="flex items-center justify-end gap-3">
                <button onClick={openLoginWeb} className=" hidden items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-black sm:inline-flex"
                    >Conecteaza-te</button>
            </div>
        </div>
         </div>
      </div>
    )
  }
   //MainContainer
   const ContainerInfo = () => {
    return(
      <div className="flex flex-col items-center justify-center gap-5 py-10 px-4 sm:px-6 lg:px-9">
        Hi
      </div>
    )
   }

  return (
    <>
   <NavBar />
   <ContainerInfo />
    </>
  )  
}