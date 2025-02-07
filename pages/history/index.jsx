import React from "react"

import kmon from '/kmonlogo.svg'
import mckenna from '/mckennalogo.svg'

export function History() {
  return (
    <>
      <div className="p-4 text-center w-full items-center justify-center flex flex-col text-black py-20">
        <h1 className="text-4xl font-bold w-1/2 py-8 font-serif font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-700">
          Previous Employment Partners</h1>
         
         <div className="bg-white text-black  place-items-center rounded-xl lg:grid lg:grid-cols-2 border-gray-200 py-16 px-16 border-2 w-3/4 sm:flex sm:flex-col sm:gap-8">

          <div className="text-center ">
          <a href="https://mckennapro.com/" target="#"><img src={mckenna} className="border-2 border-transparent hover:border-purple-600"></img></a>
          </div>

          <div className="text-center ">
          <a href="https://www.kmon.net/en/" target="#"><img src={kmon} className="border-2 border-transparent hover:border-purple-600"></img></a>
          </div>

          </div>
        </div>
    </>
  )
}
