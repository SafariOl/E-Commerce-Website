import { Box, Button, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import { width } from '@mui/system'
import { useEffect, useRef } from 'react'

const btn = {
    border: '1px solid #000',
    color: '#000',
    textTransform: 'capitalize',
    width: '100%',
    py:'4px',
    fontWeight: 600,
    fontSize: {md: '1rem', xs: '14px'},
    mb: 2,
    mt: .5
}

const title = {
    fontSize: {md: '18px', xs: '16px'},
    mb: '1em',
    color: '#000'
}

const container = { 
    textAlign: 'start', 
    position: 'absolute', 
    top: '100%',
    right: '0', 
    width: '300px', 
    p: 2, 
    bgcolor: '#fff',
    zIndex: 1111,
    border: '1px solid #000'
}

export default function UserBlock({show, setShow}: {show: boolean, setShow: (value:boolean) => void}) {
    const blockRef = useRef(null)

    const handleClickOutside = (e: MouseEvent) => 
      (blockRef.current && !blockRef.current.contains(e.target as Node)) && setShow(false);
    
    

    useEffect(() => {
        if (show) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);

  return (
    <Box ref={blockRef} sx={{...container, display: show ? 'block' : 'none'}}>
        <div style={{marginBottom: '1em'}}>
            <Typography variant='h3' sx={title}>Are you registered?</Typography>
            <Button href='/login' sx={btn}>Sign In</Button>
        </div>
        <Typography variant='h3' sx={title}>First time on the site?</Typography>
        <Typography sx={{fontSize: {md: '16px', xs: '14px'}, mb: '.5em'}}>
            After a quick registration, you will have access to many features and additional benefits.
        </Typography>
        <Button href='/register' sx={{...btn, color: '#fff', bgcolor: '#202020', '&:hover': {bgcolor: '#2b2b2b'}}}>Sign Up</Button>
    </Box>
  )
}
