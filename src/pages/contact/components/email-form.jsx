import React from "react"

export function EmailForm() {
  return (
    <>
      <div className="w-1/2 p-8 rounded-xl bg-white text-center border-gray-400 border-2 ">
        <p>Placeholder</p>
        <form>
            <label for="fname">First Name: </label>
            <input className="border-gray-200 border-2" type="text" id="fname" name="fname"/><br/><br/>
            
            <label for="lname">Last Name: </label>
            <input className="border-gray-200 border-2" type="text" id="lname" name="lname"/><br/><br/>
            
            <label for="name">Email: </label>
            <input className="border-gray-200 border-2" type="text" id="name" name="name"/><br/><br/>
            
            <label for="name">Phone: </label>
            <input className="border-gray-200 border-2" type="text" id="name" name="name"/><br/><br/>
            
            <label for="name">Company: </label>
            <input className="border-gray-200 border-2" type="text" id="name" name="name"/><br/><br/>
            
        </form>
          </div>
    </>
  )
}
