import { Box, Link, Modal, Typography } from '@mui/material'
import React from 'react'
import forHer from '../assets/images/for-her.jpg'
import forHim from '../assets/images/for-him.webp'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { setClose } from '../lib/slices/GenderSelectModalSlice'
import { genderModalBox, genderModalLink, genderModalText, ImageContainer, StyledImage } from '../utils/classes'
import theme from '../theme'


export default function GenderItemsSelection() {
  const isOpen = useAppSelector(state => state.genderModal.isOpen)
  const dispatch = useAppDispatch()
  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(setClose())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{height: '100vh', position: 'relative', width: '100%'}}
    >
      <Box sx={{
        ...genderModalBox,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        }
      }}>
          <Link href="/shop/women" sx={{
            ...genderModalLink, 
            [theme.breakpoints.up("md")] :{
            '&:hover div': {
              transform: 'scale(1)'
            }}
            }}>
            <Typography id="modal-modal-title" sx={genderModalText}>For Her</Typography>
            <ImageContainer>
              <StyledImage src={forHer} alt="For Her" width={500} height={300} loading='lazy' />
            </ImageContainer>
          </Link>
          <Link href="/shop/men" sx={{
            ...genderModalLink, 
            [theme.breakpoints.up("md")] :{
            '&:hover div': {
              transform: 'scale(1)'
            }}
          }}>
            <Typography id="modal-modal-title" sx={genderModalText}>For Him</Typography>
            <ImageContainer>
              <StyledImage src={forHim} alt="For Him" width={600} height={300} loading='lazy' />
            </ImageContainer>
          </Link>
      </Box>
    </Modal>
  )
}
