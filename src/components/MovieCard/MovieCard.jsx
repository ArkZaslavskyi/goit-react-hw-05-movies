import { Link, CardWrapper } from "./MovieCard.styled"
import { PropTypes } from "prop-types";

const MovieCard = ({ movieLink, stateLink, image, isNotPoster, title }) => {
  return (
    <Link to={movieLink} state={stateLink}
    >
      <CardWrapper
        style={{ backgroundImage: `url(${image})` }}
      >
        {isNotPoster && title}
      </CardWrapper>
    </Link>
  );
};

MovieCard.propTypes = {
  movieLink: PropTypes.string.isRequired,
  stateLink: PropTypes.exact({
    from: PropTypes.objectOf(
      PropTypes.string).isRequired
  }).isRequired,
  image: PropTypes.string.isRequired,
  isNotPoster: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default MovieCard;