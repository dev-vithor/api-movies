/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect, use } from 'react';
import './index.scss';
import axios from 'axios';

export interface MovieType {
    id: number
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
}

export default function MovieList() {
    const [movies, setMovie] = useState<MovieType[]>([]);
    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = () => {
        axios({
            method: 'GET', 
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'a96bbb6475f9f762c0f26e358898209d',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovie(response.data.results)
            console.log(response.data.results);
              
        }) 
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) => 
                <li key={movie.id} className='movie-card'>
                    <p>
                        {movie.title}
                    </p>
                    <p className='description'>
                        {movie.overview}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="img movie list" />
                    <p>
                        {movie.vote_average}
                    </p>
                </li>
            
            )}
        </ul>
    )
}