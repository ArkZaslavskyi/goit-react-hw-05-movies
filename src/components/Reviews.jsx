import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById, POSTER_CONFIG} from "services/Api";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieReviewsById(movieId).then(data => setReviews(data.results));
    }, [movieId]);

    if (!reviews) {
        return (
        <>
            <h2>Cast</h2>
        </>
        );
    }

    return (
        <>
            <ul>
                {
                    reviews.map(({ id, author, content }) => {
                        return (<li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    )})
                }
            </ul>
        </>
    );
};

export default Reviews;

