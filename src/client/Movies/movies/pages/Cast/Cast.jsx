import { Component } from 'react';

import { getMovieCast } from '../../../services/movies-services'

import CastList from '../../components/CastList';
import ErrorNotification from '../../components/ErrorNotification';

class Cast extends Component {

    state = {
        cast: [],
        loading: false,
        error: null,
    }

     componentDidMount() {
        this.setState({
            loading:true
        })
    }

    componentDidUpdate() {
       const { match } = this.props;
        const { movieId } = match.params;
        const { loading } = this.state;
        if (loading) {
            const castPage = getMovieCast(movieId);

            castPage
            .then(response => this.setState({
                cast: response.data.cast,
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
        const { cast, error } = this.state;
       
        return (
            <>
                 {!error && <CastList cast={cast} />}
                  {error && <ErrorNotification text={'Oops, Something Went Wrong. Try again!'}/>}
            </>
        )

    }

}

export default Cast;


               