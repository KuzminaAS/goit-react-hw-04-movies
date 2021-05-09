import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MovieListItem.module.css'

function MovieListItem({id, poster_path, title }) {
     const url = 'https://image.tmdb.org/t/p/w185/';
    return (
       
        <li className={styles.item} key={id}>
            <Link to={`/movies/${id}`}>
            <img className={styles.image} src={`${url}${poster_path}`} alt={title} /> </Link>
            
           <Link to={`/movies/${id}`}> <h2 className={styles.movie_name}>{title}</h2> </Link>
       </li>)
    
};

export default MovieListItem;
MovieListItem.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string
}