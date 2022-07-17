import React from "react";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';


export default function LandingPage() {
    const navigate = useNavigate()

    const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.dark
    }))

    return (
        <div>Landing Page. Back to main branch <CustomButton onClick={() => navigate('/login')}>Login Page</CustomButton></div>
    )
}