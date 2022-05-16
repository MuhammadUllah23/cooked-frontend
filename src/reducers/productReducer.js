import { SET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/constants";

export default function productReducer(state=[], action) {
    switch(action.type) {
        case SET_PRODUCTS:
            return action.payload;

        case ADD_PRODUCT:
            return [...state, action.payload];

        case DELETE_PRODUCT:
            return state.filter((product) => product !== action.payload);

        case UPDATE_PRODUCT:
            const newStateArray = state.filter((product) => product !== action.payload)
            return [...newStateArray, action.payload];

        default:
            return state;
    }
}