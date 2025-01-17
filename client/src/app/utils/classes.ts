import { alpha, InputBase, styled } from "@mui/material";
import theme from "../theme";
import Image from "next/image";
import { minWidth, width } from "@mui/system";

export const justifyCenterBlock = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const directionColumnBlock = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export const CheckCustomerModalBox = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 350,
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: '0 0 15px #202020',
    border: '1px solid #b2b2b2',
    p: '2em 0 1em',
    borderRadius: '20px'
};

export const copyrightBoxClass = {
    display:'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center'
    },
    justifyContent: 'space-between',
    alignItems:'center',
    flexWrap:'wrap',
    borderTop: '1px solid #c7c7c7',
    py:'15px',
    px:'20px',
}

export const dressStyleBunnerLink = {
    width:'100%',
    display: 'block',
    position: 'relative',
    height: {md: '289px', xs: '190px'},
    borderRadius: '20px',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px',
        overflow: 'hidden',
    },
}

export const footerWebLinkStyle = {
    mt: 0,
    border: '1px solid #000', 
    display: 'grid', 
    placeItems: 'center', 
    padding: 1, 
    borderRadius: '50%',
    '&:hover': {
      bgcolor: '#000',
      color: '#fff'
    }
}

export const footerWebLinkBox = {
    display: 'flex', 
    mt: 2, 
    gap: 2, 
    [theme.breakpoints.down('lg')]: {
    mb: '30px',
    justifyContent: 'center'
    },
    [theme.breakpoints.down('md')]: {
    mb: '30px',
    justifyContent: 'left'
    },
}

export const logoStyle = {
    fontSize: {xs: 25.2, md: 32},
    mr: {md: 2},
    mb: '25px',
    flexGrow: 1,
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
}

export const IconDisplayWrapper = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down(1100)]: {
      display: 'block'
    }
}))  

export const headerShopAccordBox = {
    [theme.breakpoints.down('md')]: {
        position: 'initial'
    },
    position: 'absolute',
    zIndex: 111,
    px: 2,
    boxShadow: {md: '0 4px 4px #777'},
    bgcolor: '#fff',
    borderBottom: '1px solid #c7c7c7',
    translate: {md: '-25% 0'}
}

export const productModulLink = {
    color: '#000', 
    textDecoration: 'none', 
    maxWidth: '250px',
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'start', 
    justifyContent:'space-between',
    overflow: 'hidden'
}

export const productModulBox = {
    [theme.breakpoints.down('md')]: { 
        justifyContent: 'center'
    },
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
}

export const productModulItemName = {
    fontSize: {md: 20, xs: 16}, 
    maxWidth: {md: '245px', xs: '172px'},
    overflow: 'hidden',
    textTransform:'capitalize', 
    whiteSpace: 'nowrap',
    textOverflow:'ellipsis'
}

export const gridItemReview = {
    textAlign: 'left',
    py: '28px',
    px: '32px',
}

export const colorslistItem = {
    width: 35, 
    height: 35, 
    borderRadius: '50%',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    border: '1px solid #c7c7c7',
    position:'relative',
}

export const sendCartBtnStyle = {
    width: {md: '400px', xs: '236px'}, 
    py: '16px', 
    bgcolor: '#000',
    borderRadius: '20px',
    color: "#fff",
    '&:hover': {
        bgcolor: '#2b2b2b'
    },
    '&:active': {
        bgcolor: '#777'
    }
}

export const accordsBox = {
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    px: 0,
    mb: 5
}

export const filtersMainBox = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bgcolor: '#fff',
    zIndex: 1111,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')] : {
        position: 'sticky',
        top: 5,
        width: '295px',
        overflowY: 'scroll',
        scrollbarColor: '#9a9a9a #fff',
        scrollbarWidth: 'thin',
    },
    p: "2em",
    maxHeight: '100vh',
}

export const paginationControls = {
    color: '#000',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    'h4, svg': {
      [theme.breakpoints.down('sm')] :{
        fontSize: '12px',
        mx: '2px'
      },
      fontSize: '16px',
      mx: '5px'
    }
}

export const sizeListBtn = {
    position:'relative', 
    width: '76px', 
    height: '47px', 
    borderRadius: '62px', 
    p:'10px 20px', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
}

export const checkboxSize = {
    position: 'absolute', 
    inset: 0, 
    width: '100%', 
    height:'100%', 
    zIndex: 111, 
    opacity: 0
}

export const shopMainBox = {
    display: 'grid',
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns:'295px 1fr',
    },
}

export const ImageContainer = styled('div')`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
transform: scale(1.1);
  transition: all .15s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.3);
  };
`;

export const genderModalText = {
    position: 'absolute',
    zIndex: 111,
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    fontSize: {md:"2em", xs: "1.5em"},
    color: '#fff'
}

  export const genderModalLink = {
    width: {md: '50%', xs: '100%'},
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
}
  
  export const genderModalBox = {
    position: 'absolute', 
    inset: 1, 
    bgcolor: '#fff', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: {md:'55vw', xs: '100vw'}, 
    height: {md: '60%', xs: '45%'},
    m: '0 auto',
    borderRadius: '20px',
    overflow: 'hidden'
}
  
  export const StyledImage = styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    object-fit: cover;
    object-position: right 50%;
  `;
  
export const passBtns = {
    border: '1px solid #a6a6a6',
    color: '#000',
    p: '3px 1.5em',
    textTransform: 'capitalize',
}

export const addressInputField = {
    border: '1px solid #a6a6a6',
    px: '10px',
    maxWidth: '300px',
    width: '100%'
}

export const formBox = {
    ...directionColumnBlock,
    justifyContent:"center",
    padding: 2,
    bgcolor:"#f5f5f5"
}

export const siteBtn = {
    bgcolor: '#202020',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: {md: '16px', xs: '14px'},
    py: '7px',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]:{
        '&:hover': { bgcolor: '#2b2b2b' }
        
    }
}