import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../../components/Notification';

import styles from './ReviewList.module.css'

function ReviewList({reviews}) {
    const reviewElements = reviews.map(({ id, author, content }) =>
        <li key={id} className={styles.review}>
        <h2 className={styles.title}>{author}</h2>
        <p className={styles.content}>{content}</p>
        </li>)
    return  <div className={styles.container}>
            <ul className={styles.list}>
                {reviews.length ? (reviewElements) : (<Notification>Sorry we don't find any movie review</Notification> )}
            </ul> 
            </div>
};

export default ReviewList;

ReviewList.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string
}