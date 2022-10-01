import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// 
import MoviesList from "components/MoviesList";
import SearchBar from "components/SearchBar";
// 
import { getSearchMovie } from "services/Api";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const queryParams = searchParams.get('query');
        
        if (queryParams !== "") {
            getSearchMovie(queryParams)
                .then(({ results }) => setMovies(results))
                .catch(console.log);
        };
    }, [searchParams])
    
    const updateQuery = query => {
        const newSearchParams = !query ? {} : { query };
        setSearchParams(newSearchParams);
    };

    return (
        <>
            <SearchBar onSubmit={updateQuery} />

            {!!movies.length &&
                <MoviesList movies={movies} />}
        </>
    );
};

export default Movies;