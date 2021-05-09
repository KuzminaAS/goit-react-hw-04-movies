import { Component } from 'react';

import { Link } from "react-router-dom";

import { trendingMovies } from '../../Movies/services/movies-services';

import styles from './TrendingMoviePage.module.css';

class TrendingMoviePage extends Component {

    state = {
        movies: [],
        loading: false,
        error:null
    }
    
    componentDidMount() {
        this.setState({
            loading: true
        })
    }
    componentDidUpdate() {
        const { loading } = this.state;
        if (loading) {
            const movieRequest = trendingMovies();

            movieRequest
             .then(({ data }) => {
                this.setState({ movies: data.results, loading: false, })
             })
            .catch((error) => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
        }
        
    }
    

    render() {
        const { movies, error } = this.state;
        const url = 'https://image.tmdb.org/t/p/w500/';
        const moviesListElements = movies.map(({ id, title, original_title, original_name, poster_path }) =>
            <li key={id} className={styles.item}> <Link to={`/movies/${id}`}> <img className={styles.image} src={`${url}${poster_path}`} alt={original_title} /> </Link>
                
                <Link to={`/movies/${id}`}> <h2 className={styles.movie_name}>{title ? (original_title) : (original_name)}</h2> </Link> </li>)
        return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Trending today</h2>
            </div>
            <div className={styles.list_container}>
                <ul className={styles.trending_list}>
           {moviesListElements}
                </ul>
            </div>
           
            {error && <p>Oops, Something Went Wrong.Try again!</p>}
        </>
    )
    }
    
};

export default TrendingMoviePage;
