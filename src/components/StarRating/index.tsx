import "./index.scss";

import { FaRegStar, FaStar } from "react-icons/fa6";

export interface Props {
  rating: number;
}

export default function StarRating(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStar = [];
  const emptyStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStar.push(i);
    } else {
      emptyStar.push(i);
    }
  }

  return (
    <div className="movie-rating">
      {fullStar.map(index => (
        <FaStar key={index} color="gold" />
      ))}
      {emptyStar.map(index => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
}
