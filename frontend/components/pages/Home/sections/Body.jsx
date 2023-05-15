import React, { useContext } from 'react'
import Card from './Card'
import { GlobalContext } from '@/pages/_app'

function Body() {
    const {movies} = useContext(GlobalContext);
  return (
    <div className='w-full mt-10  rounded-t-lg  border-red-800'>
       <div className='grid grid-cols-6 w-full m-6'>
        {movies && movies.map((e)=>(
            <Card e={e}/>
        ))
        
    }
    </div>
    </div>
  )
}

export default Body