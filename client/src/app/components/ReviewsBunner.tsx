import React from 'react'
import { Box, Grid, Rating, Typography } from '@mui/material';
import { FaCircleCheck } from "react-icons/fa6";
import { reviews } from '../utils/lists';
import { gridItemReview } from '../utils/classes';


export default function ReviewsBunner() {
    return (
        <Box mb={5}>
            <Typography variant='h1' fontSize={{md: '48px', xs: '32px'}} mb={{md: '40px', xs: '16px'}} ml={'12px'}>OUR HAPPY CUSTOMERS</Typography>
            <Grid container>
                {reviews.map((rev, idx) =>{
                return (
                    <Grid key={idx} item xs={12} md={4} sx={{...gridItemReview, 
                        borderRight: (idx !== reviews.length - 1) ? '1px solid #c7c7c7': null
                    }}>
                        <Rating readOnly value={rev.rate}/>
                        <Typography variant='h4' fontSize={{md: '20px', xs: '16px'}}>{rev.name} <FaCircleCheck style={{fill: 'green', verticalAlign: 'top'}} /></Typography>
                        <Typography variant='body1' fontSize={{md: '16px', xs: '14px'}}>{rev.review}</Typography>
                    </Grid>
                )
                })}
            </Grid>
        </Box>
    )
}
