import { NavLink } from "react-router-dom";

import { POSTER_CONFIG } from "services/Api";
import styled from "styled-components";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 185px);
    gap: 16px;
    justify-content: center;
`;

const Item = styled.li`
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 1px 3px 3px 1px #7A7A7A;

    :hover {
        transform: scale(1.025);
    };
`;

const Link = styled(NavLink)`
    /* display: block;
    border-radius: 10px; */
`;

const MoviesList = ({ movies, location }) => {
    return (
        <List>
            {movies.map(({ id, poster_path: poster, title }) => {
                const moviePoster = POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[2], poster);
                return (
                    <Item key={id}
                    >
                        <Link to={`/movies/${id}`} state={{ from: location }}
                        >
                            {poster
                                ? <img src={moviePoster} alt="" />
                                :
                                <div style={{
                                    width: '185px',
                                    height: '100%',
                                    backgroundColor: '#cccccc',
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: '500',
                                    padding: '16px'
                                }}>
                                    <p>{title}</p>
                                </div>
                            }
                        </Link>
                    </Item>
                );
            })}
        </List>
    );
};

export default MoviesList;