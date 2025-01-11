import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/playingMoviesSlice'

const usePlayingmovies = () => {

    const dispatch =useDispatch();

const nowPlayingmovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json()

    console.log(json.results)
    dispatch(addMovies(json.results))

}


useEffect( ()=>{
    nowPlayingmovies();
},[])
  
}

export default usePlayingmovies
