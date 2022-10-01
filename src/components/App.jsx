// import styled from 'styled-components';

import { Route, Routes } from "react-router-dom";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Movies from "pages/Movies";
import Home from "pages/Home";

import { getApiConfig } from "services/Api";
import { GlobalStyle } from "./GlobalStyle";
import Navigation from "./Navigation";

// const Link = styled(NavLink)`
// `;

getApiConfig();

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies /> } />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};

export default App;