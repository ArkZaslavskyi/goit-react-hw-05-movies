import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "services/Api";

const POSTER_CONFIG = {
    baseUrl: "http://image.tmdb.org/t/p/",
    posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
};

const MovieDetails = () => {
    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        getMovieById(movieId).then(data => setMovie(data));
    }, [movieId]);
    
    if (!movie) {
        return (
        <>
            <h1>MovieDetails</h1>
        </>
        );
    }

    
    const { poster_path: posterPath, title, release_date, vote_average, overview, genres } = movie;

    const moviePoster = POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[2], posterPath);
    const movieTitle = `${title} (${new Date(release_date).getFullYear()})`;
    const movieScore = `${Math.round(vote_average * 10)}%`;
    const movieGenresList = genres.map(({ name }) => name).join(' ');

    return (
        <>
            <NavLink>Go back</NavLink>
            <div style={{display: 'flex'}}>
                <img src={moviePoster} alt="" />
                <div>
                    <h2>{movieTitle}</h2>
                    <p>User Score: {movieScore}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{movieGenresList}</p>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default MovieDetails;

/*

*/