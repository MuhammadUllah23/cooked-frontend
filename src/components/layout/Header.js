import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material";
import ListItem from "@mui/material";
import ListItemText from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from "@mui/material";
import MenuItem from "@mui/material";
import SwipeableDrawer from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from '@mui/material/styles';

function ElevationScroll(props) {
    const { children } = props;
    // useScrollTrigger is an event listener
    const trigger = useScrollTrigger({
      disableHysteresis: true,   
      threshold: 0
    //   how far a user needs to scroll to trigger event listener. Default is 100.
    });
    
    // returns new version of component that is being wrapped by ElevationScroll. Clones the children and returns a new copy of the elevation when triggered
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.modal +  1,
    
}))

const ToolBarMargin = styled('div')(({ theme }) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
    },
}))
    
const LogoContainerButton = styled(Button)(({ theme }) => ({
    padding: 0,
    "&:hover": {
        backgroundColor: "transparent"
    }
}))

const LogoContent = styled('h1')(({ theme }) => ({
    color: theme.palette.secondary.dark,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "1.25em",
    fontSize: "3rem"
}))

const CustomizedTab = styled(Tab)(({ theme }) => ({
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "3em"
}))

const LoginSignupButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: theme.palette.secondary.dark,
    padding: 0,
    height: "2.5em",
    width: "15em",
    marginLeft: "auto",
    marginRight: "3em"
}))


export default function Header(props) {
// This will be the navigation bar and header that will only render for the logged in user to navigate between the tabs.
// The nav bar is to the left of the screen with the tabs 'Dashboard', 'Inventory', and 'History'. May add more to the future.
// There will also be a simple header with the name of the web site, the user's username, and a logout button.
const theme = useTheme()
const navigate = useNavigate()
const matchesMd = useMediaQuery(theme.breakpoints.down("md"))

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

// TODO: Set up the box that will fill up the screen about 90%-95%.
// ? Refer to the Arc Development project to build the side nav bar and the header.

const handleChange = (e, newValue) => {
    props.setValue(newValue)
}

    const routes = [
        {name: "Dashboard", link: "/dashboard", activeIndex: 0},
        {name: "Inventory", link: "/inventory", activeIndex: 1 },
        {name: "History", link: "/history", activeIndex: 2},
    ]

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value} onChange={handleChange} indicatorColor="primary" sx={{marginLeft: '5em'}} >
                {routes.map((route, index) => (
                    <CustomizedTab 
                        key={`${route}${index}`}
                        component={Link} 
                        to={route.link} 
                        label={route.name}  
                        onMouseOver={route.mouseOver} 
                    />
                ))}
            </Tabs>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <CustomAppBar postition="fixed" >
                    <Toolbar disableGutters>
                        <LogoContainerButton disableRipple component={Link} to="/">
                            <LogoContent>Cooked</LogoContent>
                        </LogoContainerButton>
                        {tabs}
                        <LoginSignupButton onClick={() => navigate('/login')}>
                            <h2>Login/Signup</h2>
                        </LoginSignupButton>
                    </Toolbar>
                </CustomAppBar>
            </ElevationScroll>
            < ToolBarMargin />
        </React.Fragment>        
    )
}