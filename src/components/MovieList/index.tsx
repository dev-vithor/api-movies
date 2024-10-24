/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, use } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";
import ReactLoading from 'react-loading'

export default function MovieList() {
  
  const [movies, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "a96bbb6475f9f762c0f26e358898209d",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovie(response.data.results);
    });

    setIsLoading(false);
  };

  if(isLoading) {
    return(
        <div className="loading-container">
          <ReactLoading type="cubes" color="#6046ff" height={'5%'} width={'5%'} />
        </div>
    )
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
