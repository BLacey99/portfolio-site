import React from "react"

export function EmailForm() {
  return (
    <>
      <div className="w-1/2 p-8 rounded-xl bg-white text-center border-gray-400 border-2 font-serif">
        <p>Placeholder</p>
        <form className="p-4">
          <div className="grid grid-cols-2 w-3/4 p-8 gap-x-8 rounded-xl">

            <fieldset className="flex flex-col text-left">
            <label for="name">First Name: </label>
            <input className="border-gray-200 border-2" type="text" id="name" name="name"/><br/><br/>
            </fieldset>

            <fieldset className="flex flex-col text-left">
            <label for="email">Email: </label>
            <input className="border-gray-200 border-2" type="text" id="email" name="email"/><br/><br/>
            </fieldset>

            <fieldset className="flex flex-col text-left">
            <label for="phone">Phone: </label>
            <input className="border-gray-200 border-2" type="text" id="phone" name="phone"/><br/><br/>
            </fieldset>

            <fieldset className="flex flex-col text-left">
            <label for="company">Company: </label>
            <input className="border-gray-200 border-2" type="text" id="company" name="company"/><br/><br/>
            </fieldset>

            </div>

            <textarea rows={4} cols={50} className="w-full border-gray-200 border-2 rounded-l p-2 resize-none" placeholder="Write your message here"></textarea>
        </form>
          </div>
    </>
  )
}
