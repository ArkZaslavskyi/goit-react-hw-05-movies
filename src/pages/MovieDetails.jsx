import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById, POSTER_CONFIG } from "services/Api";
import { BsArrowLeft } from 'react-icons/bs';
import styled from "styled-components";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const BackLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    gap: 4px;

    margin-bottom: 8px;
    padding: 8px 12px;

    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;

    color: navy;
    background-color: #dddddd;
    font-weight: ${p=>p.theme.fontWeights.medium};
    text-decoration: none;

    :hover {
        border: 1px solid #cccccc;

        color: orangered;
        background-color: white;
    };
`;

const MovieInfo = styled.div`
    padding-left: 8px;
`;
const Title = styled.h2`

`;

const SubTitle = styled.h3`
    margin-top: 8px;
`;

const Text = styled.p`
    margin-top: 4px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spaces[4]}px;
    padding: 8px;
`;

const Link = styled(NavLink)`
    padding: ${p => p.theme.spaces[3]}px;
    border-radius: 4px;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: navy;
    text-decoration: none;

    &.active {
        background-color: lightgray;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: orangered;
    }
`;

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
        <main>
            <BackLink to={location.state.from}>{<BsArrowLeft />}go back...</BackLink>

            <div style={{display: 'flex'}}>
                <img src={moviePoster} alt="" />
                <MovieInfo>
                    <Title>{movieTitle}</Title>
                    <Text>User Score: {movieScore}</Text>
                    <SubTitle>Overview</SubTitle>
                    <Text>{overview}</Text>
                    <SubTitle>Genres</SubTitle>
                    <Text>{movieGenresList}</Text>
                </MovieInfo>
            </div>

            <div>
                <Text>Additional information</Text>
                <Nav>
                    <Link to="cast" state={{ from: location.state.from }}>Cast</Link>
                    <Link to="reviews" state={{ from: location.state.from }}>Reviews</Link>
                </Nav>
            </div>

            <Outlet />
        </main>
    );
};

export default MovieDetails;

/*

*/