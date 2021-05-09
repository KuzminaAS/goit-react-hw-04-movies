import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorNotification.module.css';

function ErrorNotification({text}) {
    return <p className={styles.error}>{text}</p>
};

export default ErrorNotification;
ErrorNotification.propTypes ={
    text: PropTypes.string.isRequired
}