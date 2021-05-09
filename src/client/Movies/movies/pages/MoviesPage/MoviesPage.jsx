import { Component } from 'react';

import { movieSearch } from '../../../services/movies-services.js';

import MovieList from '../../components/MovieList';
import ErrorNotification from '../../components/ErrorNotification';
import MoviesSearch from '../../components/MoviesSearch';


class MoviesPage extends Component {
    
    state = {
        movies: [],
        query:'',
        loading: false,
        error: null
    }

    async componentDidUpdate() {
    const { loading, query} = this.state;
     if (loading) {
            try {
                const { data } = await movieSearch(query);
                this.setState({
                    movies: data.results,
                    loading: false
                }
                    )
            } catch (error) {
                this.setState({
                    loading: false,
                    error
                })
            }
        }
    }


    onChangeQuery = searchQuery => {
       console.log(searchQuery);
        this.setState({
            query: searchQuery,
            movies: [],
            loading: true,
            error:null
        })
    
    }

    render() {
        const { movies, loading, error } = this.state;
        const { onChangeQuery } = this;
        
        
        return (
           
            <div>
                <MoviesSearch onSubmit={onChangeQuery }/>
               {loading && <p>Movies loading ...</p>}
                {error && <ErrorNotification text={'Oops, Something Went Wrong. Try again!'}/>}
                {!loading && !error &&
                <MovieList movies={movies}/>
                }
            </div>
    )
    }
};
export default MoviesPage;
