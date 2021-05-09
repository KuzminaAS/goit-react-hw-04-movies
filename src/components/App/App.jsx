import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from '../../client/Navbar';
import Loader from '../../client/Movies/movies/components/Loader';
import NotFoundMovies from '../NotFoundMovies';

import MoviesSearch from '../../client/Movies/movies/components/MoviesSearch';
const TrendingMoviePage = lazy(()=>  import('../../client/HomePage/TrendingMoviePage'));
const MovieDitailsPage = lazy(() => import('../../client/Movies/movies/pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../../client/Movies/movies/pages/MoviesPage'));


function App() {
  return (
   
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
       <Switch>
          <Route path="/" exact component={TrendingMoviePage} />
          <Route path="/movies/:movieId" exact component={MovieDitailsPage} />
          <Route path="/movies" exact component={MoviesPage} /> 
          <Route path="/movies" exact component={MoviesSearch} /> 
          <Route path="/movies/:movieId/cast" exact component={MovieDitailsPage} />
          <Route path="/movies/:movieId/reviews" exact component={MovieDitailsPage} />
        <Route component={NotFoundMovies} />
        </Switch>
        </Suspense>
     </Router>
  );
}

export default App;
