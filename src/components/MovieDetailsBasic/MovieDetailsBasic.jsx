import PropTypes from 'prop-types';
import { POSTER_CONFIG } from "services/Api";
import defaultPoster from "default-movie-768x1129.jpg";
import { InfoWrapper, MovieInfo, Title, SubTitle, Text, Img } from "./MovieDetailsBasic.styled";

// const POSTER_CONFIG = {
//     baseUrl: "http://image.tmdb.org/t/p/",
//     posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
// };

const MovieDetailsBasic = ({ movie }) => {
  
  const {
    poster_path: poster,
    title,
    release_date: date,
    vote_average: vote,
    overview,
    genres,
  } = movie;

  const moviePoster = poster
    ? POSTER_CONFIG.baseUrl
      .concat(POSTER_CONFIG.posterSizes[2], poster)
    : defaultPoster;
  
  const movieTitle = `${title} (${new Date(date).getFullYear()})`;
  const movieScore = `${Math.round(vote * 10)}%`;
  const movieGenresList = genres.map(
      ({ name }) => name).join(' ');


  return (
    <InfoWrapper>
      <Img src={moviePoster} alt="" />
      <MovieInfo>
        <Title>{movieTitle}</Title>
        <Text>User Score: {movieScore}</Text>
        {overview &&
          (<>
            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
          </>)}
        {!!genres.length &&
          (<>
            <SubTitle>Genres</SubTitle>
            <Text>{movieGenresList}</Text>
          </>)}
      </MovieInfo>
    </InfoWrapper>
  );
};

MovieDetailsBasic.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieDetailsBasic;
