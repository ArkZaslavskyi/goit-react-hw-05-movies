// import styled from 'styled-components';

import { Route, Routes } from "react-router-dom";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Movies from "pages/Movies";
import Home from "pages/Home";

import Navigation from "./Navigation";

import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";

// const Link = styled(NavLink)`
// `;

const Body = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const App = () => {
  return (
    <Body>
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
    </Body>
  );
};

export default App;