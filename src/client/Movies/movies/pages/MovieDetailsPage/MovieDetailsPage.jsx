import { Component } from 'react';

import { movieDetails } from '../../../services/movies-services';

import { Link, Route, Switch} from "react-router-dom";

import ErrorNotification from '../../components/ErrorNotification';
import BtnGoBack from '../../components/BtnGoBack';
import MovieCard from '../../components/MovieCard';
import Cast from '../Cast';
import Reviews from '../Reviews';

import styles from './MovieDetailsPage.module.css'

class MovieDetailsPage extends Component {
    
    state = {
        movie: {
            title: '',
            genres: []
        },
        error: null
    }

    componentDidMount() {
        const { match } = this.props;
        const { movieId } = match.params;
        const movieCard = movieDetails(movieId)
            
            movieCard
            .then(({ data }) => {
            const movieData = {
            title: data.title,
            poster_path: data.poster_path,
            vote_average: data.vote_average,
            overview: data.overview,
            release_date:data.release_date,
            genres: data.genres
            }
                    this.setState({
                    movie: movieData,
                  
                })
                
            })
            .catch((error) => {
                    this.setState({
                        error
                    })
            })
        
    }

    goBack() {
        window.history.go(-1);
    }

    render() {
    const { match } = this.props;
    const { movieId } = match.params;
    const { goBack } = this;
    const { title, poster_path, vote_average, overview, release_date, genres, error } = this.state.movie;
        return (
            <div>
            <BtnGoBack onClick={goBack}> <span className={styles.arrow}>&lArr;</span> Go back</BtnGoBack>
                
             {error && <ErrorNotification text={'Oops, Something Went Wrong. Try again!'}/>}
            <MovieCard
                    title={title}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    overview={overview}
                    release_date={release_date}
                    genres={genres} />
                
                <div className={styles.nav_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}><Link to={`/movies/${movieId}/cast`} className={styles.nav_link} >Cast</Link> </li>
                    <li className={styles.nav_list_item}><Link to={`/movies/${movieId}/reviews`} className={styles.nav_link}>Reviews</Link> </li>
                </ul>
                </div>
            
                <Switch>
                    <Route path="/movies/:movieId/cast" exact component={Cast} />
                    <Route path="/movies/:movieId/reviews" exact component={Reviews} />
                </Switch>
            </div>
    )  
    }
};

export default MovieDetailsPage;
