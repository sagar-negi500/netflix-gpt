import React  from 'react'
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/playingMoviesSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
    const dispatch=useDispatch()
   
    const getMovievideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
  
      const json = await data.json();
  
      console.log(json);
  
      const filterList = json.results.filter((a) => a.type === "Trailer");
  
      const trailer = filterList[0];
  
      dispatch(addTrailer(trailer))
  
      // console.log(trailer);
    };
  
    useEffect(() => {
      getMovievideo();
    }, []);
  
  }

export default useTrailer

