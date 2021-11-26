import Link from 'next/link';
import { supabase } from '../Client';
import 'tailwindcss/tailwind.css';
import React, { MouseEvent, useState, useEffect } from 'react';

function viewStudySets() {
    const [viewStudySet, setviewStudySet] = useState([])
    const [view, setview] = useState({ Term: "", Definition: "" })
    const { Term, Definition } = view

    useEffect(() => { viewSS() }, [])

    async function viewSS() {
        const { data } = await supabase
            .from('newStudySet')
            .select('Term');
        setviewStudySet(data)
    }

    async function openSS() {
        const { data } = await supabase
            .from('newStudySet')
            .select()
        setviewStudySet(data)

    }

    async function deleteSS(view) {
        const updatedArr = viewStudySet.filter(viewItem => viewStudySet.indexOf(viewItem) != viewStudySet.indexOf(view))
        setviewStudySet(updatedArr)
        const { data } = await supabase
        .from('newStudySet')
        .delete()
    }

    async function createNSS() {
        await supabase
            .from('newStudySet')
            .insert([
                { Term, Definition }
            ])
            .single()
        setview({ Term: "", Definition: "" })
    }


    return (
        <div>
            <div className='flex justify-center bg-cyan-600 '>
                <h1 className={'text-gray-100 text-5xl font-bold font-serif text-center pt-2 pb-2'}> Your Study Sets </h1>
            </div>

            <h2 className='flex justify-center text-yellow-500  text-xl text-center font-serif font-semibold pt-4 pb-12'> All the study material you saved!</h2>
<div>
            
                {viewStudySet.map(view => (
                        <div key={view.id} className='flex justify-center mx-2 font-serif font-semibold'>
                             
                            <div className=' mb-2 mx-24 inline-block'>
                            <h3 className='text-lg'> {view.Term}
                    
                            <button onClick={(e) => {e.preventDefault(); deleteSS(view)}} className=" ml-2 px-4 bg-red-500 hover:bg-red-700 rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></button>  {/*delete button */}
                            </h3>
                            </div>
                            
                        </div> 
                    ))}
                        <div className='mt-6 flex justify-center'>
                        <Link href="/openStudySets"passHref>
                            <button className=" mx-4 px-4 font-semibold rounded-full bg-cyan-500 hover:bg-cyan-600 text-white" >Study</button>
                        </Link>

                        <Link href="/createNewStudySet"passHref>
                            <button className=" mx-4 px-4 font-semibold rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">Edit</button>
                        </Link>
                        </div>
            </div>
        </div>
    );
}

export default viewStudySets;