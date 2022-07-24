import { createTheme } from "@mui/material";

const matisse = "#355C7D"
const darkOrchid = "#6A1F9A"

export default createTheme({
    palette: {
        primary: {
            main: matisse
        },
        secondary: {
            main: darkOrchid
        }
    },
    typography: {
        tab: {
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "1em"
        }
    }
})