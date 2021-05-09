import React from 'react';
import PropTypes from 'prop-types';

import MovieListItem from '../MovieListItem';

import styles from './MovieList.module.css'

function MovieList({ movies }) {
   const movieElem = movies.map(movie => <MovieListItem key={movie.id} {...movie}/> )
    return (
        <div className={styles.list_container}>
        <ul className={styles.list}>
            {movieElem}
        </ul>
        </div>
        
    )
};

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.array,
  }