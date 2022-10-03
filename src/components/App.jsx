import { Route, Routes } from "react-router-dom";

import Navigation from "components/Navigation";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyle";
import { lazy, Suspense } from "react";
import { ProgressBar } from 'react-loader-spinner';

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));

const App = () => {
  return (
    <Box maxWidth={1200} paddingLeft={16} paddingRight={16} margin="0 auto" >
      <Navigation />

      <Suspense fallback={
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='navy'
            barColor='orangered'
        />
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies /> } />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />
    </Box>
  );
};

export default App;