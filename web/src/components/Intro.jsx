/* eslint-disable no-unused-vars */
import React from 'react'

function Intro() {
  return (
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
  )
}

export default Intro