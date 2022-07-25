import { SET_USER, SET_PRODUCTS, URL, LOGOUT_USER } from "./constants";

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
            dispatch({type: SET_USER, payload: user})
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
            localStorage.setItem("jwt", user.jwt);
            dispatch({type:  SET_USER, payload: user.data})
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
            .then((res) => res.json())
            .then((user) => {
                localStorage.setItem("jwt", user.jwt);
                dispatch({type:  SET_USER, payload: user.data})
                dispatch({type: SET_PRODUCTS, payload: user.data.products})
                // navigate to user profile
            })
    }
}

export function logoutUser(navigate) {
    return dispatch => {
        // Server side is stateless. The User logged in session is not stored on the server side.
        localStorage.clear()
        dispatch({type: LOGOUT_USER})
        navigate("/")
    }
}
