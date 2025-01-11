import React from 'react'
import Header from './Header'
import usePlayingmovies from '../Hooks/usePlayingmovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  const Trailer=usePlayingmovies();

  if(Trailer){
    console.log("trailer",Trailer)
  }
 
  return (
    <div >
     <Header/>
    
  <MainContainer/>
  <SecondaryContainer/>
  

    </div>
  )
}

export default Browse
