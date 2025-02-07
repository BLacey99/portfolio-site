import { About } from './pages/about'
import { History } from './pages/history'
import { Contact } from './pages/contact'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-center py-20'>
          <p className='font-bold font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-700'>
            Full Stack Developer & Software Engineer
          </p>
          <br></br>
          <p className='text-l font-bold font-serif'>I enjoy engineering elegant but simple software solutions to your problems.</p>
        </div>
        <About/>
        <History/>
        <Contact/>
      </div>
    </>
  )
}

export default App
