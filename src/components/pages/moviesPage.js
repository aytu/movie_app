import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import MoviesList from '../moviesList';

import {fetchMovies,deleteMovie} from '../../actions/fetchMovies';

class MoviesPage extends Component {
    static propTypes={
        movies: PropTypes.object.isRequired
    };
    async componentDidMount(){
       this.props.fetchMovies();
    }
    
    render() {      
        return (
            <div>
                <h2>Movies</h2>
                 {
                    this.props.movies.error.response ? "Error retriving" :
                 
                          <MoviesList movies={this.props.movies} deleteMovie={this.props.deleteMovie}/>
                              
                 }
            </div>
        )
    }
}
const mapStateToProps=({movies})=>{   
    return {movies};
}

const mapDispatchToProps={
    fetchMovies,
    deleteMovie
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);