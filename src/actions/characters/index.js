import { beginAjaxCall, ajaxCallError } from '../ajaxstatus';
import { getAll, getById } from './charactersApi';

export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';

export const loadGetCharactersSuccess = (characters) => {
    return {type: GET_CHARACTERS_SUCCESS,list: characters};
};

export const getCharacters = () => {
    return  async (dispatch) => {

        beginAjaxCall(dispatch);

        try {
            const characters = await getAll();

             dispatch(loadGetCharactersSuccess(characters));
        } catch (error) {
            console.log(error);
            ajaxCallError(error);
        }
    };
} 

export function getCharacter(){
    return async (dispatch) => {
        beginAjaxCall(dispatch);
        try {
            
        } catch (error) {
            ajaxCallError(error);
        }
    }
}