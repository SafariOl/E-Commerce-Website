'use client'
import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from '../theme';
import { footerHelpLinks } from '../utils/lists';
import { footerWebLinkBox, footerWebLinkStyle, logoStyle } from '../utils/classes';
import { IFooterWebLink } from '../utils/types';

const footerWebLinks:IFooterWebLink[] = [
  {
    href: '/twitter',
    icon: <TwitterIcon />
  },
  {
    href: '/facebook',
    icon: <FacebookIcon />
  },
  {
    href: '/instagram',
    icon: <InstagramIcon />
  },
  {
    href: '/git-hub',
    icon: <GitHubIcon />
  },
]

export default function Footer(){
  return (
    <Box sx={{py: 6, pl: 3, pr: 3, display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: {md: 'space-between', xs: 'center'}, [theme.breakpoints.down('lg')]: {textAlign: 'center'}}}>
      <Grid item xs={12} md={4} sx={{[theme.breakpoints.down('md')]: {textAlign: 'left'}}}>
        <Typography 
        variant="h1"
        noWrap
        component="a"
        href="/"
        sx={logoStyle}>
          SHOP.CO
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={{md: '25px', xs: '10px'}} mb={{lg:'35px', md: '20px', xs: '15px'}} maxWidth={{md: '277px', xs: '400px'}}>
          We have clothes that suits your style and which you're proud to wear. From women to men.
        </Typography>
        <Box sx={footerWebLinkBox}>
            {footerWebLinks.map(link => 
              <Link key={link.href} href={link.href} color="inherit" sx={footerWebLinkStyle}>
                {link.icon}
              </Link>
            )}
        </Box>
      </Grid>
      <Grid item xs={12} md={8} mx={0}>
        <Grid container spacing={{md: 10, xs: 4}} justifyContent={'center'}>
          {footerHelpLinks.map((item, idx) => 
            <Grid mt={0} key={idx} item xs={12} sm={6} md={3} textAlign={{ xs: 'center', sm: 'left' }} >
              <Typography variant="h4" sx={{ 
                fontSize: {md: 16, xs: 14},
                letterSpacing: {md: 4, xs: 2},
                mb: '26px',
              }}>
                {item.title}
              </Typography>
              {item.links.map((link, idx) =>
                <Typography key={idx} variant="body2" mb={'15px'}>
                  <Link key={idx} href="#" color="inherit" underline='hover' fontSize={14} sx={{opacity: .6}} noWrap>{link}</Link>
                </Typography>
              )}
          </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};