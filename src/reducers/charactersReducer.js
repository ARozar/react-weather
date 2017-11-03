import { GET_CHARACTERS_SUCCESS } from '../actions/characters';
import initialState from './initialState';

export default function characters(state = initialState.characters, action){
    switch(action.type){
        case GET_CHARACTERS_SUCCESS:
            return {...state, ...{list: action.list}};
        default:
            return state;
    }
}