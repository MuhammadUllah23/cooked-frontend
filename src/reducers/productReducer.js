import { SET_EXERCISES, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE, UPDATE_EXERCISE } from "../actions/constants";

export default function productReducer(state=[], action) {
    switch(action.type) {
        case SET_EXERCISES:
            return action.payload;

        case ADD_EXERCISE:
            return [...state, action.payload];

        case DELETE_EXERCISE:
            return state.filter((product) => product !== action.payload);

        case UPDATE_EXERCISE:
            const newStateArray = state.filter((product) => product !== action.payload)
            return [...newStateArray, action.payload];

        default:
            return state;
    }
}