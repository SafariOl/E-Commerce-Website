import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function PasswordField({setPassword}: {setPassword: (val: string) => void}) {
    const [show, setShow] = useState<boolean>(false)
  return (
    <Box sx={{height: '56px', width: '100%', position: 'relative'}}>
        <TextField sx={{position: 'absolute', height: '100%', width: '100%'}} 
        onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" 
        type={show ? "text" : "password"} fullWidth margin="normal" />
        <Button onClick={() => setShow(!show)} sx={{position: 'absolute', top: '50%', right: '0'}}>
            {show ? <VisibilityIcon sx={{color:'#2b2b2b'}} /> : <VisibilityOffIcon sx={{color:'#2b2b2b'}} />}
        </Button>
    </Box>
  )
}
