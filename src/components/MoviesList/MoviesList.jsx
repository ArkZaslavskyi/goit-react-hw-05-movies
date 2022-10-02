import MovieCard from "components/MovieCard";
import { POSTER_CONFIG } from "services/Api";
import defaultImage from 'default-movie-768x1129.jpg';
import { List, Item } from "./MoviesList.styled";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const MoviesList = ({ movies, location }) => {
    return (
        <List>
            {movies.map(({ id, poster_path: poster, title }) => {
                const moviePoster = poster
                    ? POSTER_CONFIG.baseUrl.concat(
                        POSTER_CONFIG.posterSizes[2], poster)
                    : defaultImage;
                
                return (
                    <Item key={id}
                    >
                        <MovieCard
                            movieLink={`/movies/${id}`}
                            stateLink={{ from: location }}
                            image={moviePoster}
                            isNotPoster={!poster}
                            title={title}
                        />
                    </Item>
                );
            })}
        </List>
    );
};

export default MoviesList;