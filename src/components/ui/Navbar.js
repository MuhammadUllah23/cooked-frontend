import React from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Navbar() {
// This will be the navigation bar and header that will only render for the logged in user to navigate between the tabs.
// The nav bar is to the left of the screen with the tabs 'Dashboard', 'Inventory', and 'History'. May add more to the future.
// There will also be a simple header with the name of the web site, the user's username, and a logout button.

// TODO: Set up the box that will fill up the screen about 90%-95%.
// ? Refer to the Arc Development project to build the side nav bar and the header.

    const routes = [
        {name: "Dashboard", link: "/dashboard", activeIndex: 0},
        {name: "Inventory", link: "/inventory", activeIndex: 1 },
        {name: "History", link: "/history", activeIndex: 2},
    ]

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value} onChange={handleChange} indicatorColor="primary" >
                {routes.map((route, index) => (
                    <Tab 
                        key={`${route}${index}`}
                        component={Link} 
                        to={route.link} 
                        label={route.name} 
                        aria-owns={route.ariaOwns} 
                        aria-haspopup={route.ariaPopup} 
                        onMouseOver={route.mouseOver} 
                    />
                ))}
            </Tabs>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <h1>this will be the navigation.</h1>
        </React.Fragment>
    )
}