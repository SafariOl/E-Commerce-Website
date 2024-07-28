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
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are You Registered?
            </Typography>
            <Link href="/login">Sign In</Link>
          </div>
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              First time on the site?
            </Typography>
            <Link href="/register">Sign Up</Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
