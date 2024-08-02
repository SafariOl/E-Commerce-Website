import { Box, IconButton, Link, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../utils/lists';

interface IMenu {
    anchorElNav: HTMLElement | null,
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleCloseNavMenu: () => void,
}

export default function MenuBlock({handleOpenNavMenu, handleCloseNavMenu, anchorElNav}:IMenu) {

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    key={page}
                    href={'/shop/' + page.toLowerCase().replaceAll(' ', '-')}
                    sx={{ color: '#000', textTransform: "capitalize", textDecoration: 'none', fontSize: '16px', textAlign: 'center'}}
                  >
                    {page}
                  </Link>
                  </MenuItem>
              ))}
            </Menu>
            
        </Box>
    )
}
