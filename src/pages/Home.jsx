import MoviesList from "components/MoviesList";
import { useState, useEffect } from "react";
import { getTrends } from "services/Api";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrends().then(({ results }) => setMovies(results));
    }, [])
    
    if (!movies.length) {
        return (
            <>
                <h1>Home page</h1>
            </>
        );
    };

    return (
        <>
            <MoviesList movies={movies} />
        </>
    );
};

export default Home;