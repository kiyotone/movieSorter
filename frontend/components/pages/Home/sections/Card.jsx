import React from 'react'
import Image from 'next/image'

function Card({e}) {
  console.log(e)
    return (
    <div className=''>
        <div className='sm:w-[200px] m-4 sm:[300px] hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden rounded relative'> 

        <img className='w-full h-full object-cover' src={e.Poster} alt={e.imdbID}/>
        <div className='flex flex-col text-white'>
        <p className='text-md truncate'> {e.Title}</p>
        <p className='text-sm capitalize'> {e.Type}, {e.Year}</p>
        </div>
        </div>


    </div>
  )
}

export default Card