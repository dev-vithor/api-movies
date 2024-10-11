/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

export default function MovieList() {
    const [movies, setMovie] = useState([]);
    
    const getMovies = () => {
        axios({
            method: 'GET', 
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'a96bbb6475f9f762c0f26e358898209d',
                language: 'pt-BR'
            }
        }).then(response => console.log(response))
        .catch(err => console.error(err));

        getMovies();

    }
    return (
        <ul className="movie-list">
            <li></li>
        </ul>
    )
}