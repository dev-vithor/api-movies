/* eslint-disable @next/next/no-img-element */

import { Movie } from "@/types/movie";
import StarRating from "../StarRating";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-infor">
        <p className="movie-title">{movie.title}</p>
        <div className="hidden-content">
          <p className="description">{movie.overview}</p>
        </div>
      </div>
    </li>
  );
}
