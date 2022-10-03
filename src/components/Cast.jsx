import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById} from "services/Api";
import CastList from "./CastList";
import { ProgressBar } from  'react-loader-spinner'

const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();
    
    useEffect(() => {
        getMovieCreditsById(movieId).then(data => setCast(data.cast));
    }, [movieId]);
    
    if (!cast) {
        return (
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='navy'
                barColor='orangered'
            />
        );
    };

    return (
        <>
            <CastList cast={cast} />
        </>
    );
};

export default Cast;
