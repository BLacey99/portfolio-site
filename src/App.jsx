import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { About } from './pages/about'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

<div className='text-center py-20'>
<p className='font-bold text-4xl'>
  Fullstack Developer & Software Engineer
</p>
<br></br>
<p className='text-l'>I enjoy engineering elegant but simple software solutions to your problems.</p>

</div>

        <About></About>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
    </>
  )
}

export default App
