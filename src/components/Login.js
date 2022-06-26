import * as React from "react";

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

    return (
        
        // Simple Login and sign up page.
        // Card in the center of Window with tabs on top to switch between login form and signup form
        // colors: Dark Orchid as backgorund color
        <div className="canvas">
           {/* <styledBox> */}
           <Box sx={{
                margin: "auto", width: "70%", height: "80vh", border: "2px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
                }}>
                <Grid container sx={{height: "100%", justifyContent: "space-between", backgroundColor: "white",}}>
                    <Grid item sx={{backgroundColor: "black", height: "100%", width: "50%"}}>
                        <h1>hello</h1>
                    </Grid>
                    <Grid item>
                        <h1>hello</h1>
                        <Button>press me</Button>
                    </Grid>
                </Grid>
            </Box>   
           {/* </styledBox> */}
        </div>
    )
}