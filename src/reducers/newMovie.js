
import {
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_PENDING, 
    NEW_MOVIE_REJECTED,
    UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_PENDING, 
    UPDATE_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED} from '../actions/newMovie';

const initialState={
    newMovie:{
        done:false,
        doneUpdate:false
    },
    fetching:false,   
    movie:{
        fetching:false
    }
}

export const newMovie=(state=initialState, {type, payload})=>{
    console.log(type);
    switch (type) {
        case NEW_MOVIE_PENDING:
            return {...state, fetching:true, newMovie: { done:false}}
        case NEW_MOVIE_FULFILLED :              
            return { ...state, newMovie: {...payload, done:true},  fetching:false};   
        case NEW_MOVIE_REJECTED:    
            return state;
        //update movie
        case UPDATE_MOVIE_PENDING:
            return {...state, fetching:true,newMovie: { doneUpdate:false}}
        case UPDATE_MOVIE_FULFILLED :              
            return { ...state, newMovie: {...payload, doneUpdate:true, done:false},  fetching:false};   
        case UPDATE_MOVIE_REJECTED:    
            return state;
        //Fetching movie    
        case FETCH_MOVIE_PENDING:
            return {...state, movie:{fetching:true}}
        case FETCH_MOVIE_FULFILLED :              
            return {...state, movie:{...payload,fetching:false}}
        case FETCH_MOVIE_REJECTED:    
        return {...state, movie:{fetching:false}}
        default:
            return state;
    }
}