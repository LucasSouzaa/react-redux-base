import * as types from '../types';

const INITIAL_STATE = {
    isLoading: true,
};

export default function homeReducer(state = INITIAL_STATE, action) {

    if (types.LOADING_STATUS === action.type) {
        return {
            ...state,
            isLoading: true,
        };
    }

    return state;
}
