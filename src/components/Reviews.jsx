import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById} from "services/Api";

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

