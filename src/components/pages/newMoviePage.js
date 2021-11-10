import React, { Component } from 'react'
import NewMovieForm from '../newMovieForm'
import {onAddNewMovie,onUpdateNewMovie,fetchMovie} from '../../actions/newMovie';
import {connect} from 'react-redux';


class NewMoviePage extends Component {  

    componentDidMount(){       
        if(this.props.isEmpty && this.props.match.params._id)
           this.props.fetchMovie(this.props.match.params._id);
       }

    render() {     
        return (
            <div>
                <NewMovieForm 
                    movie={this.props.movie}
                    onUpdateNewMovie={this.props.onUpdateNewMovie} 
                    onAddNewMovie={this.props.onAddNewMovie} 
                    fetching={this.props.newMovie.fetching} 
                    doneUpdate={this.props.newMovie.newMovie.doneUpdate}
                    done={this.props.newMovie.newMovie.done}/>
            </div>
        )
    }
}

const mapStateToProps=({newMovie,movies},props)=>{
    return {
        newMovie,
        isEmpty: movies.movies.length===0,       
        movie: (movies.movies.length===0 ? newMovie.movie :(movies.movies.find(x=>x._id===props.match.params._id)) || {})
    };
}
const mapDispatchToProps={
    onAddNewMovie:onAddNewMovie,
    fetchMovie:fetchMovie,
    onUpdateNewMovie:onUpdateNewMovie
}
export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);
