import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Card"; 
import "./MovieList.css"; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams(); 
  const apiKey = "YOUR_API_KEY"; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=47981494ecb0541ad004b6c6a15a0baa&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovies();
  }, [type]); 

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "Popular").toUpperCase()}</h2>
      <div className="cards-container">
        {movies.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;





  
  












