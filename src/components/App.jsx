// import styled from 'styled-components';

import { Route, Routes } from "react-router-dom";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Movies from "pages/Movies";
import Home from "pages/Home";

import Navigation from "./Navigation";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyle";
// const Link = styled(NavLink)`
// `;

const App = () => {
  return (
    <Box maxWidth={1200} paddingLeft={16} paddingRight={16} margin="0 auto" >
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
    </Box>
  );
};

export default App;