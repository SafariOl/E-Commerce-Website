import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Link, List, ListItem, ListItemButton } from '@mui/material';
import * as React from 'react';
import { headerShopAccordBox } from '../utils/classes';

export default function HeaderShopAccord() {
    const [isActive, setIsActive] = React.useState(false)
  return (
    <List sx={{position: 'relative', mb: 0, pb: 0}} >
        <ListItemButton onClick={() => setIsActive(!isActive)} sx={{pl: 0, pb: 0, mb: 0, fontWeight: isActive ? 700 : 400}}>
            Shop {isActive ? <KeyboardArrowUp/> : <KeyboardArrowDown />}
        </ListItemButton>
        <Box sx={{
            ...headerShopAccordBox,
            display: isActive ? 'block': 'none',
        }}>
            <ListItem sx={{ml: 0, pl: 0}}>
                <Link href='/shop/men' color={'#000'} sx={{textDecoration:'none', opacity: .8, fontSize: '16px'}}>Men</Link>
            </ListItem>
            <ListItem sx={{ml: 0, pl: 0}}>
                <Link href='/shop/women' color={'#000'} sx={{textDecoration:'none', opacity: .8, fontSize: '16px'}}>Women</Link>
            </ListItem>
        </Box>
    </List>
  );
}

