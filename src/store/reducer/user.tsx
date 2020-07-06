import { Reducer } from "redux"
import { TACTIONS, ACTIONS } from "../actions/main";

export type TinitialUserState = {
    name: string;
    mail: string;
    phone: string;
    id: string;
    orders: {
        placeName: string,
        rating: number,
        coupon: boolean;
        discount: number;
        item: {
            name: string;
            quantity: number;
            price: number;            
        }[];
        payment: {
            method: string;
            price: number;
            deliveryFee: number;            
        }        
    }[];
}


const initialState = {
    name: 'User Name',
    mail: 'usermail@something.com',
    phone: '(XX) XXXX-XXXX',
    id: 'XXX XXX XXX XX',
    orders: [],
}


export const user: Reducer<TinitialUserState, TACTIONS> = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}