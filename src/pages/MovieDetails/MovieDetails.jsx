import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import MovieDetailsBasic from "components/MovieDetailsBasic";
import { getMovieById } from "services/Api";
import { BackLink, AddInfoWrapper, SubTitle, Nav, Link } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();
    
    useEffect(() => {
        getMovieById(movieId).then(data => setMovie(data));
    }, [movieId]);
    
    if (!movie) { return; };

    return (
        <main>
            <BackLink to={location.state.from}>{<BsArrowLeft />}go back...</BackLink>
            
            <MovieDetailsBasic movie={movie} />

            <AddInfoWrapper>
                <SubTitle>Additional information</SubTitle>
                <Nav>
                    <Link to="cast" state={{ from: location.state.from }}>Cast</Link>
                    <Link to="reviews" state={{ from: location.state.from }}>Reviews</Link>
                </Nav>
            </AddInfoWrapper>

            <Outlet />
        </main>
    );
};

export default MovieDetails;
