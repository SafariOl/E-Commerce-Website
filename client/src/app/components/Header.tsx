'use client'
import * as React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuBlock from './MenuBlock';
import HeaderControls from './HeaderControls';
import HeaderPageLinksList from './HeaderPageLinksList';
import { logoStyle } from '../utils/classes';
import { Box } from '@mui/material';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar disableGutters sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: '.5em'}}>
        <Typography
          variant="h1"
          noWrap
          component="a"
          href="/"
          sx={{
            ...logoStyle,
            display: { xs: 'none', md: 'flex'},
            alignItems: 'center',
            textAlign: 'center',
            mb: 0,
            mt: '-10px'
          }}
        >
          SHOP.CO
        </Typography>
        <div style={{display: 'flex', gap: 2, alignItems: 'bottom'}}>
          <MenuBlock 
            handleCloseNavMenu={handleCloseNavMenu} 
            handleOpenNavMenu={handleOpenNavMenu} 
            anchorElNav={anchorElNav} 
          />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              ...logoStyle,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              flexGrow: 1,
              mb: 0,
              mt: '-5px'
            }}
          >
            SHOP.CO
          </Typography>
        </div>
        <HeaderPageLinksList handleCloseNavMenu={handleCloseNavMenu} />
      </Box>
      <HeaderControls />
    </Toolbar>
  )
}
