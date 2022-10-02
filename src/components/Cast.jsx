import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById} from "services/Api";
import CastList from "./CastList";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieCreditsById(movieId).then(data => setCast(data.cast));
    }, [movieId]);

    if (!cast) { return; };

    return (
        <>
            <CastList cast={cast} />
        </>
    );
};

export default Cast;
