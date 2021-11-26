import Link from 'next/link';
import { supabase } from '../Client';
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';

function createNewStudySet() {
  const [createStudySet, setcreateStudySet] = useState([])
  const [add, setadd] = useState({ Term: "", Definition: "" })
  const {Term, Definition } = add

  useEffect(() => {
    showSS()
  }, [])

  async function showSS() {

    const { data } = await supabase
      .from('newStudySet')
      .select();
    setcreateStudySet(data)
  }

  async function createNSS() {
    await supabase
      .from('newStudySet')
      .insert([
        {Term, Definition }
      ])
      .single()
    setadd({ Term: " ", Definition: " " })
  }

  return (
    <div className="createNewStudySet">
      <div className='flex justify-center bg-cyan-600 '>
                <h1 className={'text-gray-100 text-5xl font-bold font-serif text-center pt-2 pb-2 '}> Add Your Study Sets</h1>
            </div>

            <h2 className='flex justify-center text-yellow-500  text-xl text-center font-serif font-semibold pt-4 pb-12'> Add terms and definitions you want to keep save in AXENDA!</h2>

      <div>
      
        <input
        className='mx-3 border-b border-yellow-500'
          placeholder="Add Term"
          value={Term}
          onChange={e => setadd({ ...add, Term: e.target.value })}
        />

        <input
        className='border-b border-yellow-500'
          placeholder="Add Definiton"
          value={Definition}
          onChange={e => setadd({ ...add, Definition: e.target.value })}

        />
          <button
          className="mx-52 font-semibold rounded-full py-2 px-16 mb-4 bg-cyan-500 hover:bg-cyan-600 text-white "
          onClick={(e) => {
            e.preventDefault()
            createNSS()
            showSS()
          }}>
          Add Set
        </button>
      </div>
      <div>
        {
          createStudySet.map(add => (
            <div key={add.id} className='mx-4'>
              <h2 className='font-serif font-semibold'> {add.id}- {add.Term} </h2>
              <p className='mx-5 font-serif'> {add.Definition} </p>
            </div>
          ))
        }
        <div className='flex justify-center'>
          <Link href="/viewStudySets" passHref>
            <button className=" mt-4 font-semibold rounded-full py-2 px-16 bg-cyan-500 hover:bg-cyan-600 text-white " type="button">Save Study Set</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default createNewStudySet;