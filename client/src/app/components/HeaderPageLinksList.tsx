import { Box, Link } from '@mui/material'
import React from 'react'
import { pages } from '../utils/lists';

interface IProp {
    handleCloseNavMenu: () => void
}

export default function HeaderPageLinksList({handleCloseNavMenu}:IProp) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 10} }}>
        {pages.map((page) => (
        <Link
            key={page}
            href={'/shop/' + page.toLowerCase().split(" ").join("-")}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', textTransform: "capitalize", textDecoration: 'none', fontSize: '16px', px: '10px'}}
        >
            {page}
        </Link>
        ))}
    </Box>
  )
}
