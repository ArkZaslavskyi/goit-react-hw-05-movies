import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById} from "services/Api";
import ReviewsList from "./ReviewsList";
import { ProgressBar } from  'react-loader-spinner'

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();
    
    useEffect(() => {
        getMovieReviewsById(movieId).then(data => setReviews(data.results));
    }, [movieId]);
    
    if (!reviews) {
        return (
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='navy'
                barColor='orangered'
            />
        );
    }

    if (!reviews.length) { return; };

    return (
        <>
            <ReviewsList reviews={reviews} />
        </>
    );
};

export default Reviews;
