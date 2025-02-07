import React from "react"
import { EmailForm } from "./components/email-form"

export function Contact() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 p-4 text-center w-full items-center justify-center flex flex-col font-bold text-white py-28">
        <h2 className="text-3xl  w-1/2 font-serif">
          Let's bring your ideas to life!</h2>
        <h3 className="text-xl ">Complete the form below or email me at <a type="email" href="mailto:Blake.M.Lacey@gmail.com" className="font-bold font-serif text-white active:text-white visited:text-white hover:text-cyan-300">Blake.M.Lacey@gmail.com</a></h3>
      </div>
      <EmailForm />
    </>
  )
}
