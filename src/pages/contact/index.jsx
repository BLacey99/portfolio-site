import React from "react"
import { EmailForm } from "./components/email-form"

export function Contact() {
  return (
    <>
      <div className="bg-white text-black p-4 text-center w-full items-center justify-center flex flex-col text-white py-20">
        <h2 className="text-3xl text-black w-1/2 font-serif py-8">
          Want to get in contact about an opportunity?<br></br>
          Contact me with the form below or email me at <a type="email" href="mailto:Blake.M.Lacey@gmail.com" className="font-serif">Blake.M.Lacey@gmail.com</a></h2>
          </div>
          <EmailForm/>
    </>
  )
}
