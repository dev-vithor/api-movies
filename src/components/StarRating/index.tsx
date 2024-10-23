
import test from "node:test";

export interface Props {
    rating: number;
}

export default function StarRating(props: Props) {
    const numStars = Math.round(props.rating / 2)
    console.log(numStars);
    
    return (
        test
    );
}