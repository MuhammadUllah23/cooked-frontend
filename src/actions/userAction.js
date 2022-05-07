import { SET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/constants";

export function fetchProducts() {
    return dispatch => {
        fetch('http://localhost:3000/products', {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {

            }
        })
        .then((products) => {
            dispatch({ type: SET_PRODUCTS, payload: products})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}