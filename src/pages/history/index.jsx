import React from "react"

export function History() {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-600 via-blue-700 to-sky-600 p-4 text-center w-full items-center justify-center flex flex-col text-white py-20">
        <h2 className="text-3xl font-bold w-1/2 py-8 font-serif">
          Employment Partners I've had the pleasure of working with over the years</h2>
         
         <div className="bg-white text-black p-8 place-items-center rounded-xl grid grid-cols-2 border-gray-800 border-2 w-3/4">

          <div className="text-center border-purple-400 border-2 w-3/4 rounded-xl font-serif">
            <p>McKenna Professional Imaging</p>
            <em>Software Engineer & Network Specialist</em>
          </div>

          <div className="text-center border-purple-400 border-2 w-3/4 rounded-xl font-serif">
            <p>KM.ON By Karl Mayer</p>
            <em>Full Stack Software Engineer</em>
          </div>

          </div>
        </div>
    </>
  )
}
