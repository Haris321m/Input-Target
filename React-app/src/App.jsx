import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <>
      <div className='text-center px-5 py-20 m-auto'>
        <h1 className='text-3xl text-white '>Hello {name}</h1>
        <input type="text"
          placeholder='What is you name'
          className='my-5 p-2 outline-none text-center text-2xl bg-transparent border-2 border-white bg-opacity-50 rounded-xl'
          onChange={handleChange}
        />
        <br />
        <button className='text-xl my-4 border-2 border-white px-28 py-2 hover:cursor-pointer bg-white text-[#00ccff] font-bold rounded-xl'>Submit</button>
      </div>
    </>
  )
}

export default App
