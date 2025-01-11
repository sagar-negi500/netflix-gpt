import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
   
    <div className=' w-screen aspect-video z-10 p-5 pt-[20%] absolute text-white '>
    <h2 className='text-4xl font-bold pb-3'>{title}</h2>
    <p className='text-md w-1/4 mb-3'>{overview}</p>

    <button className='px-6 py-2  rounded-xl text-black mr-3 bg-white hover:opacity-80' >▶ play </button>
    <button className='px-6 py-2 bg-gray-400 rounded-xl bg-opacity-50 hover:opacity-80 text-black'>More Info </button>
    </div>
   
   
  )
}

export default MovieTitle
