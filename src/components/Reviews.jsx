import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById} from "services/Api";
import ReviewsList from "./ReviewsList";

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
            <ReviewsList reviews={reviews} />
        </>
    );
};

export default Reviews;
