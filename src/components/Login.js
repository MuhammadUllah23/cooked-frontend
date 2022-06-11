import * as React from "react";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Theme from "./ui/Theme";
import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    canvas: {
        backgroundColor: theme
    }
}))

export default function Login() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        
        // Simple Login and sign up page.
        // Card in the center of Window with tabs on top to switch between login form and signup form
        // colors: Dark Orchid as backgorund color
        
        <Grid container style={{backgroundColor: theme.palette.primary}} >
            <h1>Hello</h1>
        </Grid>
    )
}