import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById} from "services/Api";
import styled from "styled-components";

const Review = styled.li`
    :not(:first-of-type) {
        margin-top: 16px;
    };
`;

const Author = styled.h3`
`;

const AuthorTitle = styled.span`
    color: #707070;
`;

const Text = styled.p`
    margin-top: 8px;
`;



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
                        return (
                            <Review key={id}>
                                <Author><AuthorTitle>Author: </AuthorTitle>{author}</Author>
                                <Text>{content}</Text>
                            </Review>
                    )})
                }
            </ul>
        </>
    );
};


export default Reviews;
