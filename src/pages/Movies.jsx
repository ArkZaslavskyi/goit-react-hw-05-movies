import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
// 
import MoviesList from "components/MoviesList";
import SearchBar from "components/SearchBar";
// 
import { getMovieByQuery } from "services/Api";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get('query') ?? '';

    const [query, setQuery] = useState(() => queryParams);
    const location = useLocation();

    const updateQueryParams = query => {
        const newSearchParams = !query ? {} : { query };
        setSearchParams(newSearchParams);
    };

    useEffect(() => {   
        if (query) {
            getMovieByQuery(query)
                .then(({ results }) => setMovies(results))
                .catch(console.log);
        };
    }, [query]);
    

    return (
        <main>
            <SearchBar
                query={queryParams}
                onChange={updateQueryParams}
                onSubmit={setQuery} />

            {!!movies.length &&
                <MoviesList
                    movies={movies}
                    location={location}
                />}
        </main>
    );
};

export default Movies;