'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'satoshi-reg, sans-serif',
        h1: {
            fontFamily: 'integral-bold, sans-serif'
        },
        h3: {
            fontFamily: 'satoshi-bold, sans-serif',
        },
        h4: {
            fontFamily: 'satoshi-med, sans-serif'
        },
    },
});

export default theme;
