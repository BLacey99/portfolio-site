import React from "react"
import { useState } from "react"





export function EmailForm() {

  const [text, setText] = useState('')

  const handleTextCount = (event) => {
    setText(event.target.value)
  }

  const charLimitReached = (characterCount) => {
    if (characterCount > 499) {
      return
    }
  }

  return (
    <>
      <div className="flex flex-col items-center w-1/2 p-4 rounded-xl bg-white text-center border-gray-200 border-2 font-serif -mt-24 mb-12">
        <form className="p-4">
          <div className="lg:grid lg:grid-cols-2 lg:w-full py-4 gap-x-8 rounded-xl sm:flex sm:flex-col sm:w-3/4">

            <fieldset className="flex flex-col text-left">
              <label for="name">Name *</label>
              <input className="border-gray-200 border-2" type="text" id="name" name="name" required/><br /><br />
            </fieldset>

            <fieldset className="flex flex-col text-left">
              <label for="email">Email *</label>
              <input className="border-gray-200 border-2" type="text" id="email" name="email" required/><br /><br />
            </fieldset>

            <fieldset className="flex flex-col text-left">
              <label for="phone">Phone</label>
              <input className="border-gray-200 border-2" type="text" id="phone" name="phone" /><br /><br />
            </fieldset>

            <fieldset className="flex flex-col text-left">
              <label for="company">Company</label>
              <input className="border-gray-200 border-2" type="text" id="company" name="company" /><br /><br />
            </fieldset>

          </div>

          <div className="flex flex-col">
            <textarea rows={8} cols={100} maxLength="500" value={text} onChange={handleTextCount} className="w-full border-gray-200 border-2 rounded p-2 resize-none" placeholder="Write your message here"></textarea>
            <p className={"place-self-end px-4 " + (text.length > 480 ? 'text-red-500' : 'text-gray-500')}>{text.length}/500</p>
            
            <button id="send" type="submit" className="bg-gray-200 p-0.5 hover:bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-700  w-1/4 self-center rounded "><span className="bg-white w-full flex p-2 hover:text-black-500 hover:bg-gray-300 rounded flex-row justify-center">
              Send</span>
              </button>
          </div>
        </form>

      </div>
    </>
  )
}
