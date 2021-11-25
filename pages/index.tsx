import Link from 'next/link';
import { supabase } from '../Client';
import 'tailwindcss/tailwind.css';
import React, { MouseEvent, useState, useEffect } from 'react';


function index() {
  const [Login, setLogin] = useState([])
  const [name, setname] = useState({ Name: "" })
  const { Name } = name

  async function createLogin() {
    await supabase
      .from('Login')
      .insert([
        { Name }
      ])
      .single()
    setname({ Name: "" })

  }

  return (
    <div className="App">
      <div className='flex justify-center'>
        <img src="img/studyimg.jpg" alt="study" />
      </div>
      <div>
        <h1 className={'text-cyan-600 text-6xl font-bold font-sans uppercase text-center pt-2 pb-2'}>Quizlet-clone</h1>
        <p className={'text-yellow-500  text-xl text-center font-serif  pb-12'}> Organise your study material! </p>
        {/* <p className={'text-gray-200 text-l text-center font-serif pt-12 pb-6'}> Enter your name to login </p> */}
      </div >
      
      <div className='flex justify-center'>

        <input
          className='border-b border-yellow-500 text-center pb-2 mb-4 bg-gray-300  bg-opacity-25'
          placeholder="Ener your name"
          value={Name}
          onChange={e => setname({ ...name, Name: e.target.value })}
                   />
 
      </div>
      <div className='flex justify-center'>
      <Link href="/quizlet">
        <button className =  "font-semibold rounded-full py-2 px-16 bg-cyan-500 hover:bg-cyan-600 text-white " type="button" onClick={createLogin} >Login</button>
      </Link>
      </div>
      

    </div>
  )

}
export default index;