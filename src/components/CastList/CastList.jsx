import { PropTypes } from 'prop-types';
import { POSTER_CONFIG } from "services/Api";
import { List, Title, SubTitle, Img } from './CastList.styled';
import defaultImage from 'default-movie-768x1129.jpg';

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const CastList = ({ cast }) => {
    return (
        <List>
            {cast.map(({ id, profile_path: posterPath, name, character }) => {
                const castPoster = posterPath
                    ? POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[0], posterPath)
                    : defaultImage;

                return (
                    <li key={id}>
                        <Title>{name}</Title>
                        <Img src={castPoster} alt="" />
                        <SubTitle>{character}</SubTitle>
                    </li>
                );
            })}
        </List>
    );
};

CastList.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default CastList;

