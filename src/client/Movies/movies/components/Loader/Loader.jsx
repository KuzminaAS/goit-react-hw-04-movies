import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Loader.module.css'


const LoaderComponent = () => {
  return ( <Loader className={styles.loader}
        type="Grid"
        color="#0059ff"
        height={80}
        width={80}
        timeout={3500} 
      /> );
}
 
export default LoaderComponent;