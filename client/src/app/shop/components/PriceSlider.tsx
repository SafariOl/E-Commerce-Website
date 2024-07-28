import { useAppDispatch } from '@/app/lib/hooks';
import { setPrice } from '@/app/lib/slices/FilterSlice';
import { Slider } from '@mui/material'
import {useState} from 'react'

const marks = [
    {
        value: 10,
        label: '$10'
    },
    {
        value: 5000,
        label: '$5000'
    },
]

export default function PriceSlider () {
  const [value, setValue] = useState<number[]>([20, 5000]);
  const dispatch = useAppDispatch()

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(setPrice(newValue as number[]))
  };

  return (
    <Slider 
        min={10} 
        max={5000} 
        aria-label="Always visible" 
        valueLabelDisplay="auto"
        aria-valuetext='$'
        value={value}
        onChange={handleChange}
        sx={{color:'inherit', width: '100%'}}
        marks={marks}
    >
    </Slider>
  )
}
