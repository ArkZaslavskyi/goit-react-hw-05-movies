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

    if (!reviews.length) {
        return (
            <>
                <h3>Oop's! We don't have any <span style={{color: 'blueviolet'}}>reviews</span> for this movie</h3>
            </>
        );
    };

    return (
        <>
            <ReviewsList reviews={reviews} />
        </>
    );
};

export default Reviews;
