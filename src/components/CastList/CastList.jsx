import { PropTypes } from 'prop-types';
import { POSTER_CONFIG } from "services/Api";
import { List, Title, SubTitle, Img, Patch } from './CastList.styled';

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const CastList = ({ cast }) => {
    return (
        <List>
            {cast.map(({ id, profile_path: posterPath, name, character }) => {
                const castPoster = POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[0], posterPath);

                return (
                    <li key={id}>
                        <Title>{name}</Title>
                        {posterPath
                            ? <Img src={castPoster} alt="" />
                            : <Patch />}
                        <SubTitle>{character}</SubTitle>
                    </li>
                );
            })}
        </List>
    );
};

CastList.propType = {
    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default CastList;

