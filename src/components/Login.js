import * as React from "react";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Theme from "./ui/Theme";
import { makeStyles } from "@mui/material";

import './Login.css'



export default function Login() {

    const theme = useTheme()

    return (
        
        // Simple Login and sign up page.
        // Card in the center of Window with tabs on top to switch between login form and signup form
        // colors: Dark Orchid as backgorund color
        <div className="canvas">
        <Grid container justifyContent="center" style={{backgroundColor: theme.palette.primary}} >
            <Grid item justifyContent="center">
                <h1>hello</h1>
            </Grid>
        </Grid>
        </div>
    )
}