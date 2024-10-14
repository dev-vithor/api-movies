/* eslint-disable @next/next/no-img-element */

import { Movie } from "@/types";

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
  return (
    <li className="props-card">
      <p>{props.movie.title}</p>
      <p className="description">{props.movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        alt="img movie list"
      />
      <p>{props.movie.vote_average}</p>
    </li>
  );
}
