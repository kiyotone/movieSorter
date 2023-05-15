import { GlobalContext } from '@/pages/_app'
import React, { useContext, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'



function Search() {

  const {text,setText} = useContext(GlobalContext)
  return (
    <div className='container flex justify-between items-center mt-20 text-white sm:flex-row sm:gap-y-3 flex-col'>
        <h4>search by <span className='text-lg'> {text} </span> </h4>

        <DebounceInput debounceTimeout={200} type='text' onChange={(e) => setText(e.target.value)} placeholder='Search here...' className='border-b-2 bg-transparent w-60 '></DebounceInput>
    </div>
  )
}

export default Search