//SinglePageRoutes.js - Samantha Danielle Reyes - 301372609 - Sept 25, 2024

import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Portfolio innerRef={refs.refPortfolio}/>
    </Box>)
}