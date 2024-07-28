import theme from '@/app/theme'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface IProps {
    main_img: string,
    img1: string,
    img2: string
}

const imageBoxClass = {
    mt: 2,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'left',
    gap: '14px',
    alignItems: 'top',
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        
    }
}

const mainImgBlock = { 
    boxShadow: '1px 1px 25px #bbb', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    width:{md: '444px', xs: "100%"},
    mx: 2, 
    height: {md: '530px', sm: '60vh', xs: "300px"},
}

const adoptionImgsBlock = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    mx: 2,
    [theme.breakpoints.down('md')] : {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
}

export default function ImageBlock({main_img, img1, img2}:IProps) {
    const mainImgRef = useRef(null)
    const imagesContainer = [main_img, img1, img2]
    const [currImg, setCurrImage] = useState<string | null>(main_img)
    const handleClick  = (img:string) => {
        if(mainImgRef.current){
            setCurrImage(img)
        }
    }

  return (
    <Box sx={imageBoxClass}>
        <Box sx={mainImgBlock}>
            <Image ref={mainImgRef} 
            style={{
                width: '100%', 
                height: 'auto', 
                objectFit: 'cover',
                objectPosition: 'center'
            }}
            src={`data:image/jpeg;base64,${currImg}`} width={100} height={100} quality={100} alt='main_img' loading='lazy'/>
        </Box>
        <Box sx={{...adoptionImgsBlock, gap: {md: '14px', xs: '10px'}}}>
            {imagesContainer.length && imagesContainer.map(img => {
                return (
                    <Button key={img} sx={{
                        p: 0,
                        borderRadius: '20px', 
                        overflow:'hidden',
                        border: (img == currImg)? '1px solid #000' : 'none',
                        width: {md: '152px', xs: `calc(100% / 3 - 14px)`},
                        height: {md: '167px', xs: '106px'}
                    }} 
                        onClick={() => handleClick(img)}
                    >
                        <Image src={`data:image/jpeg;base64,${img}`} loading='lazy' quality={100} alt='img1' width={100} height={100} 
                            style={{
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                objectPosition: 'center'
                        }} />
                    </Button>
                )
            })}
        </Box>
    </Box>
  )
}
