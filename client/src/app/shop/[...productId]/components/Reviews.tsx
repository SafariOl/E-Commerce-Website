import { IReview } from '@/app/lib/slices/ShopReducer'
import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

interface IProp {
    reviews: IReview[] | null | undefined
}

export default function Reviews({reviews}:IProp) {
    const [loadedReviews, setLoadedReviews] = useState(4)
    const handleMoreReviews = () => {
        if(reviews && reviews.length < loadedReviews + 4)
            return setLoadedReviews(prev => prev += reviews.length - loadedReviews)
        setLoadedReviews(prev => prev += 4)
    }

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2
    }}>
        <Typography variant='h4' sx={{fontSize: {md:'20px', xs: '16px'}, mb: '24px'}}>Rating & Reviews</Typography>
        <Box sx={{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            mx:2,
            mb: 4
        }}>
            <Typography variant='h3' fontSize={{md: '24px', xs: '20px'}}>All Reviews <span style={{opacity: .6}}>({reviews?.length})</span></Typography>
            <Button sx={{
                px: {md:'20px', xs: '16px'},
                py: {md:'16px', xs: '12px'},
                bgcolor: '#000',
                color: "#fff",
                borderRadius: '20px',
                textTransform: 'capitalize',
                '&:hover': {
                    bgcolor: '#777'
                }
            }}><Typography variant='h4' fontSize={{md: '16px', xs: '12px'}}>Write a Review</Typography></Button>
        </Box>
        <Grid container spacing={2} sx={{
                    justifyContent: 'center',
                    mb: 3,
                    px: {md: 4, xs: 0}
                }}>
            {reviews && reviews.slice(0, loadedReviews).map(review => 
                <Grid item md={6} xs={12} key={review.review} p={2}>
                    <Box p={2} sx={{
                        border: '1px solid #000', 
                        height: '100%',
                        borderRadius: '20px'
                    }}>
                        <Rating readOnly size='medium' value={review.rate}/>
                        <Typography variant='h4' fontWeight={700} my={'8px'} fontSize={{md: '20px', xs: '16px'}}>{review.user.substring(0, review.user.indexOf(' ') + 2)}. <FaCircleCheck style={{fill: 'green', verticalAlign: 'top'}} /></Typography>
                        <Typography variant='body1' fontSize={{md: '16px', xs: '12px'}} sx={{opacity: .6}}>"{review.review}"</Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
        <Button onClick={handleMoreReviews} sx={{
            margin: '0 auto',
            border: '1px solid #000',
            p: '10px 2em',
            borderRadius: '10px',
            display: (reviews && (loadedReviews === reviews.length || reviews.length <= 4)) ? 'none' : 'block'
        }}>
            <Typography variant='h3' 
                sx={{color: '#000', 
                fontSize: {md: '16px', xs: '14px'}, 
                textTransform: 'capitalize',
            }}
            >
                Load More Reviews
            </Typography>
        </Button>
        <Button onClick={() => setLoadedReviews(4)} sx={{
            margin: '0 auto',
            border: '1px solid #000',
            p: '10px 2em',
            borderRadius: '10px',
            display: (reviews && loadedReviews === reviews.length && loadedReviews !== 4) ? 'block' : 'none'
        }}>
            <Typography variant='h3' 
                sx={{color: '#000', 
                fontSize: {md: '16px', xs: '14px'}, 
                textTransform: 'capitalize',
            }}
            >
                Load Less Reviews
            </Typography>
        </Button>
    </Box>
  )
}
