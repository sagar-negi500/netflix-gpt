import React from 'react'
import { useSelector } from 'react-redux';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';


const MainContainer = () => {

  const movies =useSelector((store)=>store.movies?.playingMovies)

  if(!movies) return;

  const mainMovie=movies[0]
  // console.log(mainMovie);

 

  const {original_title ,id,overview}=mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <MovieTitle title={original_title} overview={overview}/>
      <MovieTrailer movieId={id}/>

    </div>
  )
}

export default MainContainer;
