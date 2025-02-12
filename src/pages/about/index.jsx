import React from "react"
import { SummaryPlate } from "./components/summary-plate"

export function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 p-4 text-center w-full items-center justify-center flex flex-col text-white py-40 font-serif">
        <h2 className="text-3xl font-bold w-1/2">
          Hello, I'm Blake, it's nice to meet you.</h2>
        <p className="text-center text-l font-bold p-4 w-1/2">I began my professional journey years ago after deciding to pursue my passion in technology that has captivated me since childhood. Over my career, I have done a variety of interesting work, ranging from constructing physical networks for both the public and private sector, to writing complex enterprise grade software solutions for the international market. I am a very sociable, confident, and motivated developer with extensive team-oriented experience.
        </p>
        </div>
        <SummaryPlate></SummaryPlate>
      
     

    </>
  )
}
