import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../../components/Notification';

import styles from './CastList.module.css';

import defaultImg from '../../../../../image/profile.jpeg'

function CastList({cast}) {
    const url = 'https://image.tmdb.org/t/p/w185/';
    const castMovieElements = cast.map(({ id, profile_path, name, character }) =>
            <li key={id} className={styles.cast}>
            {profile_path ? (<img src={`${url}${profile_path}`} alt={name} className={styles.img} />) : <img src={defaultImg} alt={name} className={styles.default_img}/>} 
            <p className={styles.text}>
                Actor:
                {name}
            </p>
            <p className={styles.text}>
                Role:
                {character}
            </p>
            </li>
        )
    return (
    <div className={styles.container}>
         <ul className={styles.cast_list}>
            {castMovieElements}
            {cast.length ? (castMovieElements) : (<Notification>Sorry we don't find any movie cast</Notification> )}
        </ul>
     </div>
    )
};

export default CastList;

CastList.propTypes = {
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
}