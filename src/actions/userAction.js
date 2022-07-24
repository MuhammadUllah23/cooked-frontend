import { GET_USER, SET_PRODUCTS, URL } from "./constants";

export function fetchUser(){
    return dispatch => {
        fetch(URL + '/current_user',
        { headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
            }
        })
        .then((res) => res.json())
        .then((user) => {
            dispatch({type:GET_USER, payload: user})
        })
    } 
}

export function createUser(newUserData, navigate) {
    return dispatch => {
        fetch(URL + '/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(newUserData),
        })
        .then((res) => res.json())
        .then((user) => {
            dispatch({type: GET_USER, payload: user.data})
            navigate("/dashboard")
        })
    }
}

export function loginUser(user, navigate) {
    return dispatch => {
        fetch(URL + "/login", {
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

