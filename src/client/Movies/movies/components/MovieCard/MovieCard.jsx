import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.css';

import defaultImg from '../../../../../image/not_found.jpeg'

function MovieCard({ title, poster_path, vote_average, overview, release_date, genres }) {
    const movieElements = genres.map(({ id, name }) => <li key={id} className={styles.genre}>{name}</li>);
    const url = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div className={styles.container}>
            <div className={styles.container_img}>{poster_path? <img src={`${url}${poster_path}`} alt={title} className={styles.image} /> : (<img src={defaultImg} alt={title} className={styles.default_img}></img>)}</div>
        <div className={styles.container_card}>
                <h2 className={styles.title}>{title}</h2>
                <hr className={styles.underline}/>
                <span className={styles.text}>Date: ({release_date})</span>
                <span className={styles.score}>User Score: {vote_average * 10}%</span>
                <h3 className={styles.text}>Overwiew</h3>
                <p className={styles.overview}>{overview}</p>
                <h3 className={styles.text}>Genres</h3>
            <ul>
                    {movieElements}
            </ul>
         </div>
         </div>
    )
};

export default MovieCard;

MovieCard.propTypes = {
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
  }