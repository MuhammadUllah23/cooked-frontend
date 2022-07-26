import { SET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, URL } from "../actions/constants";

export function fetchProducts() {
    return dispatch => {
        fetch(URL + '/products', {
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
        fetch(URL + '/products', {
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

export function deleteProduct(product) {
    return dispatch => (URL + `/products/${product.id}`, {
        method: "DELETE"
    })
    .then(res => {
        dispatch({ type: DELETE_PRODUCT, payload: product})
        // it sould render the inventory page without this product listed
    })
}

export function updateProduct(product) {
    return dispatch => (URL + `/products/${product.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then( product => {
        dispatch({ type: UPDATE_PRODUCT, payload: product })
        // should render inventory page with the update product
    })
} 