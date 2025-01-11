import React from 'react'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movieList=useSelector((store)=>store?.movies?.playingMovies)

  console.log(movieList)
  return (
    <>
     <p>second</p>
    </>
  )
}

export default SecondaryContainer
