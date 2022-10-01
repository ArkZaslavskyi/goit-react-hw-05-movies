import { NavLink } from "react-router-dom";

const MoviesList = ({ movies, location }) => {
    return (
            <ul>
                {movies.map(({id, title}) => (
                <li key={id}
                >
                    <NavLink to={`/movies/${id}`} state={{from: location}}>{title}</NavLink>
                </li>
                    ))}
            </ul>
    );
};

export default MoviesList;