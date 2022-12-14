import PropTypes from 'prop-types';
import { List, Author, AuthorTitle, Text, Review } from './ReviewsList.styled';

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const ReviewsList = ({ reviews }) => {
    return (
        <List>
            {
                reviews.map(({ id, author, content }) => {
                    return (
                        <Review key={id}>
                            <Author>
                                <AuthorTitle>Author: </AuthorTitle>{author}
                            </Author>
                            <Text>{content}</Text>
                        </Review>
                )})
            }
        </List>
    );
};

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ReviewsList;

