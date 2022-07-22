import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import { MainCont } from "./ui/designConstants";

const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.dark
    }))
export default function LandingPage() {
    const navigate = useNavigate()

    

    return (
        <MainCont container>
            <div>Landing Page. Back to main branch <CustomButton onClick={() => navigate('/login')}>Login Page</CustomButton></div>
        </MainCont>
        
    )
}