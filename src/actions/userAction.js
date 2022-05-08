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

export function createProducts(product) {
    return dispatch => {
        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: localStorage.getItem("token")
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(product => {
            dispatch({type: ADD_PRODUCT, payload: product})
            // it should render the item on the page inventory page.
        })
    }
}