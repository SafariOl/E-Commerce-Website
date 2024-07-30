import { Box, Link } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderShopAccord from './HeaderShopAccord';
import { SearchBox, SearchIconWrapper, StyledInputBase } from '../utils/classes';
import { pages } from '../utils/lists';

interface IProp {
    handleCloseNavMenu: () => void
}

export default function HeaderPageLinksList({handleCloseNavMenu}:IProp) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 10} }}>
        <HeaderShopAccord />
        {pages.map((page) => (
        <Link
            key={page}
            href={'/' + page.toLowerCase()}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', textTransform: "capitalize", textDecoration: 'none', fontSize: '16px', px: '10px'}}
        >
            {page}
        </Link>
        ))}
        <SearchBox>
            <SearchIconWrapper>
                <SearchIcon sx={{color:"#5b5b5b", fontSize: 25}}/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for products…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </SearchBox>
    </Box>
  )
}
