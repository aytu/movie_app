import React from 'react';
import PropTypes  from 'prop-types';
import CardComponent from './cardComponent';
import {Grid} from 'semantic-ui-react';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";
export default function MoviesList({movies,deleteMovie}) {
    const override = `
    display: block;
    margin: 210px auto;
    border-color: red;
  `;
   // movies=movies.movies;
    console.log(movies);
    const message="There are no message yet.";
    const list= <Grid  stackable columns={3}>
            { 
                movies.movies.map(movie=>{
                    return  <CardComponent key={movie._id}  movie={movie} deleteMovie={deleteMovie}/>
                })
            }
       </Grid>;
    return (
       
            <div>
                <HashLoader color="#35bdb2" loading={movies.fetching} css={override}   size={50} />
                {Object.keys(movies).length !== 0 && !movies.fetching? list : message}
            </div>    
    )
}
MoviesList.prototype={
    deleteMovie:PropTypes.func.isRequired,
    movies:PropTypes.shape({
        movies:PropTypes.array.isRequired
    })
}

