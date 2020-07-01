import { createStore, Reducer, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { TACTIONS, ACTIONS } from "../actions/main";
import { places, TplacesInitialState } from "./places";

export type TinitialState = {
    auth: number;
        name: string;
        email: string;
        phone: string;  
}

export type Tstore = {
    main: TinitialState,
    places: TplacesInitialState
}

const initialState = {
    auth: -1,
    name: '',
    email: '',
    phone: ''
}

const main: Reducer<TinitialState, TACTIONS> = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOG_IN:
            // const user = {...state};
            // user.userInfo = {}
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS.LOG_OFF:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default createStore(combineReducers({main, places}), applyMiddleware(thunk));