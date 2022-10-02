import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById, POSTER_CONFIG} from "services/Api";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

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
            <ul>
                {
                    cast.map(({ id, profile_path: posterPath, name, character }) => {
                        // const { profile_path: posterPath, name, character } = cast;
                        const castPoster = POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[0], posterPath);

                        return (<li key={id}>
                            <h3>{name}</h3>
                            {posterPath && <img src={castPoster} alt="" />}
                            <h3>{character}</h3>
                        </li>
                    )})
                }
            </ul>
        </>
    );
};

export default Cast;
