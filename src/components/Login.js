import * as React from "react";
import { useState } from "react";

import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Theme from "./ui/Theme";
// import styled from "styled-components";

// TODO: Input fields must have the ability to check if credentials are in right format.
// TODO: If user has not created a profile then there should be a signup button that opens up a dialog which will have the sign up form.
// TODO: Remove the second grid item as it is not necessary or use the right grid item for a signup form.

// TODO: When signing up, If user has not put their email and password in correct format then an error box will pop up.
// TODO: When user does not put right credentials when signing up then an error will pop up saying "Incorrect Email or Password"

// TODO: Make it design dynamic to different screen sizes last.

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
            <Grid item sx={{display: "flex", justifyContent: "center"}} >
                <TextField
                    label="Email"
                    id="email"
                    value={credentials.email}
                    onChange={onChange}
                    sx={{
                        width: "20em"
                    }}
                />
            </Grid>
            <Grid item sx={{display: "flex", justifyContent: "center"}} >
                <TextField
                    label="Pasword"
                    id="password"
                    value={credentials.password}
                    onChange={onChange}
                    type="password"
                    sx={{
                        width: "20em",
                        marginTop: "2em"
                    }}
                />
            </Grid>
            <Grid item container justifyContent="flex-end" sx={{ marginTop: "2em" }}>
            <Button >
                Login
            </Button>
            </Grid>
        </div>
    )

    const signUpForm = (
        
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
                <Grid container 
                sx={{
                    margin: "auto", 
                    height: "100%", 
                    backgroundColor: "white", 
                    borderRadius: "25px",
                    overflow: "hidden",
                    
                }}
                >
                    <Grid item container direction="column" 
                    sx={{
                        width: "50%",
                        padding: "2.5em",
                        }}>
                        <Grid item container sx={{justifyContent: "center"}}>
                            {renderLoginForm}
                        </Grid>
                        
                    </Grid>
                    <Grid item container sx={{width: "50%", backgroundColor: "#14047d"}}>
                        {/* Pictures of the service will go here */}
                    </Grid>
                </Grid>
            </Box>   
           {/* </styledBox> */}
        </div>
    )
}