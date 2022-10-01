import axios from 'axios';
const API_KEY = 'b282a22ae665f5f17a32a077013d243c';

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

export const getApiConfig = () => {
    const pathParams = '';

    return getMovies({ queryType: '/configuration', pathParams });
};

export const getTrends = () => {
    const mediaType = 'movie';
    const timeWindow = 'week';

    const pathParams = '/'.concat(mediaType, '/', timeWindow);

    return getMovies({ queryType: '/trending', pathParams });
};

export const getMovieById = id => {
    const pathParams = `/${id}`;

    return getMovies({ queryType: '/movie', pathParams });
};

export const getSearchMovie = query => {
    const pathParams = `/movie`;

    return getMovies({ queryType: '/search', pathParams, query });

};