import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export interface ILink {href: string, text: string}

export default function BasicBreadcrumbs({links, text}: {links: ILink[], text: string}) {
  return (
      <div role="presentation" style={{marginLeft: '1em'}}>
        <Breadcrumbs aria-label="breadcrumb">
        {links && links.map((link, idx) =>
            <Link key={idx} underline="hover" color="inherit" href={`${link.href}`} sx={{fontSize: {md: '1em', xs: '.85em'}}}>
            {link.text}
            </Link>
        )}
        <Typography color="text.primary" sx={{fontSize: {md: '1em', xs: '.85em'}}}>{text}</Typography>
      </Breadcrumbs>
    </div>
  );
}
