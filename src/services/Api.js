import axios from 'axios';
const API_KEY = 'b282a22ae665f5f17a32a077013d243c';

export const POSTER_CONFIG = {
    baseUrl: "http://image.tmdb.org/t/p/",
    posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
};


const getMovies = async ({ queryType, pathParams, query }) => {
    const config = {
        baseURL: 'https://api.themoviedb.org/3', 
        params: {
            api_key: API_KEY,
            query
        }
    };
    
    const { data } = await axios.get(`${queryType}${pathParams}`, config);
    return data;
};

export const getTrends = () => {
    const queryType = '/trending';

    const mediaType = 'movie';
    const timeWindow = 'week';

    const pathParams = '/'.concat(mediaType, '/', timeWindow);

    return getMovies({ queryType, pathParams });
};

export const getMovieById = id => {
    const queryType = '/movie';
    const pathParams = `/${id}`;

    return getMovies({ queryType, pathParams });
};

export const getMovieByQuery = query => {
    const queryType = '/search';
    const pathParams = `/movie`;

    return getMovies({ queryType, pathParams, query });

};

export const getMovieCreditsById = id => {
    const queryType = '/movie';
    const pathParams = `/${id}/credits`;

    return getMovies({ queryType, pathParams });
};

export const getMovieReviewsById = id => {
    const queryType = '/movie';
    const pathParams = `/${id}/reviews`;

    return getMovies({ queryType, pathParams });
};

export const getApiConfig = () => {
    const pathParams = '';

    return getMovies({ queryType: '/configuration', pathParams });
};
