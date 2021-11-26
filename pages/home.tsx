import Link from 'next/link'
import 'tailwindcss/tailwind.css';

const home = () => {
    return (
        <div>
            <div className='flex justify-center bg-cyan-600 '>
                <h1 className={'text-gray-100 text-6xl font-bold font-sans uppercase text-center pt-2 pb-2'}> AXENDA</h1>
            </div>

            <h2 className='flex justify-center text-yellow-500  text-xl text-center font-serif font-semibold pt-4 pb-12'> Start arranging your study material in AXENDA!</h2>

            <div className='flex justify-center'>
                <Link href="/createNewStudySet"passHref>
                    <a><button className="font-semibold rounded-full py-2 px-16 bg-cyan-500 hover:bg-cyan-600 text-white mb-6 " type="submit">Create New Study Set</button></a>
                </Link>
            </div>

            <div className='flex justify-center'>
                <Link href="/viewStudySets" passHref>
                    <a><button className="font-semibold rounded-full py-2 px-16 bg-cyan-500 hover:bg-cyan-600 text-white " type="submit">View your Study Set</button></a>
                </Link>
            </div>
        </div>
    );
}


export default home;