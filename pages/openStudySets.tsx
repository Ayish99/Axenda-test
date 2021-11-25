import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { supabase } from '../Client';
import React, { MouseEvent, useState, useEffect } from 'react';

function openStudySet() {
    const [openStudySets, setopenStudySets] = useState([])
    const [open, setopen] = useState({Term:"", Definition:""})

   
  useEffect(() => {
    openSS()
  }, [])
  
    async function openSS() {
        const { data }  = await supabase
        .from('newStudySet')
        .select('id, Term, Definition')
        setopenStudySets(data)    
    }


  return(
    <div className="openStudySet mx-4">
      <div className='flex justify-center bg-cyan-600'>
        <h1 className={'text-gray-100 text-5xl font-bold font-serif text-center pt-2 pb-2 '}> Study Mode</h1>
      </div>
       {
      openStudySets.map(open => (
        <div key={open.id}>
          <h1 className='font-semibold font-serif pt-4'> {open.id}- {open.Term} </h1>
          <p> {open.Definition} </p>
        </div>
      ))
    }
    <div className='flex justify-evenly pt-8'>
    <Link href="/viewStudySets">
    <button className=" mt-4 font-semibold rounded-full py-2 px-16 bg-cyan-500 hover:bg-cyan-600 text-white ">Back</button>
    </Link>

    <Link href="/quizlet">
    <button className=" mt-4 font-semibold rounded-full py-2 px-16 bg-yellow-500 hover:bg-yellow-600 text-white ">Homepage</button>
    </Link>

    </div>
    </div>
    )
}
export default openStudySet;