import { Component } from 'react';

import { fields } from './fields';

import styles from './MoviesSearch.module.css';

class MoviesSearch extends Component{

    state = {
        searchQuery: ""
    };

    handleChange = ({ target }) => {
        this.setState({
            searchQuery: target.value
        })
    }


  handleSubmit = (e) => {
        e.preventDefault();
        const {searchQuery}=this.state
        this.props.onSubmit(searchQuery)
        this.setState({ searchQuery: ""})
    }


    render() {
        const { handleChange, handleSubmit } = this;
      
    return (
            <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.search}
                    onChange={handleChange}
                    {...fields.query}
                    required
                />
                    <button className={styles.btn_search} type='submit'></button>
                
            </form>
            </>
        )
    }
    
};

export default MoviesSearch;
