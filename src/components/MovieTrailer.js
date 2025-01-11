import React, { useEffect } from "react";
import useTrailer from "../Hooks/useTrailer";
import {  useSelector } from "react-redux";

const MovieTrailer = ({ movieId }) => {
  const trailerVideo = useSelector((store)=>store.movies.trailer)
   useTrailer(movieId);
  
  return (
    <div className=" w-screen">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  );
};

export default MovieTrailer;
