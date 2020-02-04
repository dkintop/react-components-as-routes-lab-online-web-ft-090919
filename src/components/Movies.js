import React from "react";
import { movies } from "../data";


function renderMovies(){
  return movies.forEach(movie=> {
    <div>{movie.title}</div>
    <div>{movie.time}</div>
    
  })
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
  );
};

export default Movies;
