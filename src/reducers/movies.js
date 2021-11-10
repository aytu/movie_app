import {FETCH_MOVIES_FULFILLED,
        FETCH_MOVIES_REJECTED,
        FETCH_MOVIES_PENDING,
        DELETE_MOVIE_FULFILLED,
        DELETE_MOVIE_REJECTED,
        DELETE_MOVIE_PENDING} from '../actions/fetchMovies';

const initialState={
   movies:[],
   error:{},
   fetching:false
};

export const movies=(state=initialState, {type,payload})=>{
    switch (type) {
       case FETCH_MOVIES_PENDING:
           return {...state, fetching:true}
       case FETCH_MOVIES_FULFILLED:
           return { ...state, movies: payload, fetching:false};       
       case FETCH_MOVIES_REJECTED:
            return { ...state, error: payload, fetching:false};    
        case DELETE_MOVIE_PENDING:
            return {...state, fetching:true}
        case DELETE_MOVIE_FULFILLED:
            return { ...state, movies: state.movies.filter(x=>x._id!==payload.id), fetching:false};       
        case DELETE_MOVIE_REJECTED:
                return { ...state, error: payload, fetching:false};     
       default:
         return state;
    }  
}