import React from 'react';
import styles from './BtnGoBack.module.css';

function BtnGoBack ({onClick, children}) {
    return (
        <div className={styles.btn_container}>
            <button className={styles.button} type='button' onClick={onClick}> {children}</button>
        </div> 
    )
};

export default BtnGoBack;
