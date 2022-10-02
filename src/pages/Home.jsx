import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// 
import MoviesList from "components/MoviesList";
// 
import { getTrends } from "services/Api";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrends().then(({ results }) => setMovies(results));
    }, [])
    
    if (!movies.length) {
        return ;
    };

    return (
        <main>
            <MoviesList movies={movies} location={location} />
        </main>
    );
};

export default Home;