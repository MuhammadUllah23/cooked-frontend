import * as React from "react";
import { useState } from "react";

import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Theme from "./ui/Theme";
// import styled from "styled-components";

import './Login.css'

// const styledButton =  styled(Button)`
//   color: white;
//   background-color: blue;
//   height: 80px;
// `;


// const styledBox = styled(Box)({
//     margin: "auto",
    
//     width: "70%",
//     height: "80vh",
//     border: "2px solid green",
    
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// })


export default function Login() {

    const theme = useTheme()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [emailHelper, setEmailHelper] = useState("")
    const [passwordHelper, setPasswordHelper] = useState("")

    const onChange = (event) => {
        let valid
        // Function to check if email and password that the user inputted meets the conditions below
        switch (event.target.id) {
            case "email":
                setCredentials({...credentials, email: event.target.value})
                // Checks to see if it is in email format.
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                    event.target.value
                );
                
                if (!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }
                break;
            case "password":
                setCredentials({...credentials, password: event.target.value})
                // Checks to see if it is in email format.
                valid = "(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$".test(
                    event.target.value
                );
                
                if (!valid) {
                    setPasswordHelper("Invalid Password")
                } else {
                    setPasswordHelper("")
                }
                break;    
        }
    }

    const renderLoginForm = (
        <div className="login-form">
            <form>
                <label>Email</label>
                <input 
                    type="text"
                    name="email" 
                    id="email"
                    onChange={onChange}
                    value={credentials.email}
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={onChange}
                    value={credentials.password}
                    pattern="(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    required 
                />
                <input type="submit" />
            </form>
        </div>
    )

    return (
        
        // Simple Login and sign up page.
        // Card in the center of Window with tabs on top to switch between login form and signup form
        // colors: Dark Orchid as backgorund color
        <div className="canvas">
           {/* <styledBox> */}
           <Box sx={{
                margin: "auto", width: "70%", height: "80vh", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
                }}>
                <Grid container spacing={5} 
                    sx={{
                        margin: "auto", 
                        height: "100%", 
                        backgroundColor: "white", 
                        borderRadius: "25px",
                        overflow: "hidden"
                    }}
                >
                    <Grid item container sx={{width: "50%"}}>
                        {renderLoginForm}
                    </Grid>
                    <Grid item container sx={{width: "50%", backgroundColor: "lightblue"}}>
                        {/* Pictures of the service will go here */}
                    </Grid>
                </Grid>
            </Box>   
           {/* </styledBox> */}
        </div>
    )
}