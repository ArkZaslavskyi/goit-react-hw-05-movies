import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById, POSTER_CONFIG } from "services/Api";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();
    
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
            <NavLink to={location.state.from}>Go back</NavLink>

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

            <div>
                <p>Additional information</p>
            <NavLink to="cast" state={{ from: location.state.from }}>Cast</NavLink>
            <NavLink to="reviews" state={{ from: location.state.from }}>Reviews</NavLink>

            </div>

            <Outlet />
        </>
    );
};

export default MovieDetails;

/*

*/