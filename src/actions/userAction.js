import { GET_USER, SET_PRODUCTS } from "./constants";

export function fetchUser(){
    return dispatch => {
        
    }
}

export function loginUser(user, navigate) {
    return dispatch => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })
            .then((res) => {
                if (res.ok) {
                    localStorage.setItem("token", res.headers.get("Authorization"));
                    return res.json()
                } 
            })
            .then((user) => {
                dispatch({type: GET_USER, payload: user.data})
                dispatch({type: SET_PRODUCTS, payload: user.data.products})
                // navigate to user profile
            })
    }
}