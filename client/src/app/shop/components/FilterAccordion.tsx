import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriceSlider from './PriceSlider';
import Size from './Sizes';
import FilterList from './FilterList';
import { colors, dressStyleList, sizes } from '@/app/utils/lists';
import { accordsBox } from '@/app/utils/classes';

const accordions = [
    {
        title: 'Price',
        details: <PriceSlider/>
    },
    {
        title: 'Colors',
        details: <FilterList list={colors} />
    },
    {
        title: 'Size',
        details: <Size sizes={sizes}/>
    },
    {
        title: 'Dress Style',
        details: <FilterList list={dressStyleList}/>
    },
]

export default function FilterAccordion() {
  return (
    <Box sx={accordsBox} >
        {accordions.map(accItem =>
            <Accordion key={accItem.title} sx={{boxShadow: 'none', mb: '-20px'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{px: 0}}>
                    <Typography variant='h3' fontSize={20} textTransform={'capitalize'}>{accItem.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{accItem.details}</AccordionDetails>
            </Accordion>
        )}
    </Box>
  )
}
