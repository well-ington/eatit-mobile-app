import { createStore, Reducer, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { TACTIONS, ACTIONS } from "../actions/main";
import { places, TplacesInitialState } from "./places";
import { user, TinitialUserState } from "./user";

export type TinitialState = {
    auth: number;
        name: string;
        email: string;
        phone: string; 
        selectedRestaurant: number;
}

export type Tstore = {
    main: TinitialState;
    places: TplacesInitialState;
    user: TinitialUserState;
}



const initialState = {
    auth: -1,
    name: '',
    email: '',
    phone: '',
    selectedRestaurant: 0
}

const main: Reducer<TinitialState, TACTIONS> = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOG_IN:
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS.LOG_OFF:
            return {
                ...initialState
            }
        case ACTIONS.SELECT_RESTAURANT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default createStore(combineReducers({main, places, user}), applyMiddleware(thunk));