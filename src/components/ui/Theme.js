import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

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
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        
        tab: {
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "black"
        }
    }
})