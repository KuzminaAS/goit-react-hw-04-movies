import { Component } from 'react';

import {getMovieReviews} from '../../../services/movies-services'

import ReviewList from '../../components/ReviewList';
import ErrorNotification from '../../components/ErrorNotification';

class Reviews extends Component {

    state = {
        reviews: [],
         loading: false,
         error: null
    }

      componentDidMount() {
        this.setState({
            loading:true
        })
    }

    componentDidUpdate() {
        const { match } = this.props;
        const { movieId} = match.params;
        const { loading } = this.state;
        if (loading) {
            const moviePageReview = getMovieReviews(movieId);
        moviePageReview
        .then(response => this.setState({
            reviews: response.data.results,
            loading: false
        })) 
            .catch((error) => {
                this.setState({
                    loading: false,
                    error
            })
            })
        }
      
    }



    render() {
        const { reviews, error } = this.state;
        return (
            <>
                {error && <ErrorNotification text={'Oops, Something Went Wrong. Try again!'} />}
                {!error && <ReviewList reviews={reviews} />}
            </>
         )
    }
   
};

export default Reviews;
