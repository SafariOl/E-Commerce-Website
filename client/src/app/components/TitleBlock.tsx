import { Button, Container, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import title_img from '../assets/images/Title_Image.png'
import Image from 'next/image';
import theme from '../theme';
import { directionColumnBlock, siteBtn } from '../utils/classes';
import GenderItemsSelection from './GenderItemsSelection';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { setOpen } from '../lib/slices/GenderSelectModalSlice';

const TypographyText = styled(Paper)(({ theme }) => ({
    fontWeight: 700,
    boxShadow: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    fontSize: 64,
    [theme.breakpoints.down('md')]: {
        fontSize: 36,
    },
}));

const BannerBox = styled('div')(({theme}) => ({
    marginTop: '24px',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down(1400)]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export default function TitleBlock() {
    const isOpen = useAppSelector(state => state.genderModal.isOpen)
    const dispatch = useAppDispatch()

  return (
    <Container maxWidth='xl'>
        <BannerBox>
            <Container sx={{
                width: 'fit-content',
                ml: 0, pl: 0, pr: 0, mr: 0,
                [theme.breakpoints.down(1400)]: directionColumnBlock
            }}>
                <Box sx={{mb: 5, 
                [theme.breakpoints.down(1400)] : {
                    textAlign: 'center'
                }}}>
                    <Typography variant='h1'>
                        <TypographyText>
                            FIND CLOTHES
                        </TypographyText>
                    </Typography>
                    <Typography variant='h1'>
                        <TypographyText>
                            THAT MATCHES
                        </TypographyText>
                    </Typography>
                    <Typography variant='h1'>
                        <TypographyText>
                            YOUR STYLE
                        </TypographyText>
                    </Typography>
                </Box>
                <Typography 
                sx={{
                    fontSize: {xs: '14px', md: '16px'},
                    mb: '2em',
                    maxWidth: '545px',
                    [theme.breakpoints.down(1400)] : {
                        textAlign: 'center'
                    }
                }}>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </Typography>
                <Button onClick={() => dispatch(setOpen())} sx={{...siteBtn, px: '2.5em', mb: '3em'}}>
                    Shop Now
                </Button>
                {isOpen && <GenderItemsSelection />}
                <Box sx={{
                    display:'flex', 
                    flexWrap:'wrap',
                    justifyContent: {xs: 'center', md: 'flex-start'}, 
                    gap: {xs: '2em', md: '4em'}
                    }}>
                    <Box>
                        <Typography variant='h3' sx={{fontSize:{xs: '24px', md: '40px'}}}>
                            200+
                        </Typography>
                        <Typography sx={{
                            fontSize: {xs: '14px', md: '16px'}
                        }}>International Brands</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h3' sx={{fontSize:{xs: '24px', md: '40px'}}}>
                            2,000+
                        </Typography>
                        <Typography sx={{
                            fontSize: {xs: '14px', md: '16px'}
                        }}>High-Quality Products</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h3' sx={{fontSize:{xs: '24px', md: '40px'}}} >
                            30,000+
                        </Typography>
                        <Typography sx={{
                            fontSize: {xs: '14px', md: '16px'}
                        }}>Happy Customers</Typography>
                    </Box>
                </Box>
            </Container>
            <Box sx={{
                alignSelf: {1400: 'end'},
                maxWidth: '643px',
                height: 'auto',
                display: 'grid',
                placeItems: 'center',
            }}>
                <Image src={title_img} style={{width: '100%', height: 'auto'}} quality={100} alt="title-bunner-img" />
            </Box>
        </BannerBox>
    </Container>
  )
}
