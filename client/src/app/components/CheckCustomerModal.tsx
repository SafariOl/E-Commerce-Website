import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch } from '../lib/hooks';
import { closeModal } from '../lib/slices/CheckCustomerSlice';
import { Link } from '@mui/material';
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
            <Link href="/login" underline='hover' sx={{color: 'purple', fontSize: '18px', fontWeight: 600}}>Sign In</Link>
          </div>
          <Typography id="modal-modal-description" variant="h3" sx={{fontSize: {md: '1em', xs:'.9em'}, mb: '.5em'}}>
            First time on the site? <Link href="/register" sx={{color: 'purple', fontSize: '15px', fontWeight: 600}}>Sign Up</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
