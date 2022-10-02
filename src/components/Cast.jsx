import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById, POSTER_CONFIG} from "services/Api";
import styled from "styled-components";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 185px);
    gap: 16px;
    justify-content: center;
`;

const Title = styled.h4`
    color: blueviolet;
    margin-bottom: 4px;
`;

const SubTitle = styled.h4`
    margin-top: 4px;
`;
const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieCreditsById(movieId).then(data => setCast(data.cast));
    }, [movieId]);

    if (!cast) {
        return (
        <>
            <h2>Cast</h2>
        </>
        );
    }

    return (
        <>
            <List>
                {
                    cast.map(({ id, profile_path: posterPath, name, character }) => {
                        const castPoster = POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[0], posterPath);

                        return (
                            <li key={id}>
                                <Title>{name}</Title>
                                {posterPath
                                    ? <img src={castPoster} alt="" style={{ width: '133px', height: '200px' }} />
                                    : <div style={{ width: '133px', height: '200px', backgroundColor: '#cccccc' }} />}
                                <SubTitle>{character}</SubTitle>
                            </li>
                    )})
                }
            </List>
        </>
    );
};

export default Cast;
