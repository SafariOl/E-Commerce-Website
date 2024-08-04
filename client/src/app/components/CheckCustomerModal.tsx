import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch } from '../lib/hooks';
import { closeModal } from '../lib/slices/CheckCustomerSlice';
import { Button, Link } from '@mui/material';
import { CheckCustomerModalBox } from '../utils/classes';

interface IProp {
  isOpen: boolean
}

export default function CheckCustomerModal({isOpen}:IProp) {
  const dispatch = useAppDispatch()
  const handleClose = () => dispatch(closeModal());

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={CheckCustomerModalBox}>
          <div style={{marginBottom: '2em'}}>
            <Typography id="modal-modal-title" variant="h1" sx={{fontSize: {md: '1.4em', xs:'1.1em'}, mb: '.5em'}}>
              Are You Registered?
            </Typography>
            <Button href='/login' sx={{color: '#000', fontSize: '18px', fontWeight: 600, border: '1px solid #000', p: '3px 3em', borderRadius: '10px'}}>
              Sign In
            </Button>
          </div>
          <Typography id="modal-modal-description" variant="h3" sx={{fontSize: {md: '1em', xs:'.9em'}, mb: '.5em'}}>
            First time on the site?
          </Typography>
          <Button href="/register" sx={{color: '#fff', fontSize: '15px', fontWeight: 600, bgcolor: '#202020', p: '3px 3em', borderRadius: '10px', "&:hover": {bgcolor: '#2b2b2b'}}}>
            Sign Up
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
