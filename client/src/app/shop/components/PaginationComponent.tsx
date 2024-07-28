import {useEffect, useState} from 'react';
import { Pagination, Box, Typography, PaginationItem } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import ProductsModul from '@/app/components/ProductsModul';
import { usePathname } from 'next/navigation';
import { getProducts } from '@/app/lib/thunks/shopThunks';
import { justifyCenterBlock, paginationControls } from '@/app/utils/classes';


export default function PaginationComponent()  {
  const [page, setPage] = useState<number>(1)
  const pathname = usePathname()
  const gender = pathname.slice(6, pathname.length)
  const dispatch = useAppDispatch()
  const productsPerPage = 6;
  const items = useAppSelector(state => state.shop.items)
  const count= Math.ceil(items.length / productsPerPage)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  useEffect(() => {
    dispatch(getProducts(gender.split('')[0].toUpperCase()))
  }, [])

  return (
    <>
      {ProductsModul(items.slice((page - 1) * productsPerPage, page * productsPerPage), gender)}
      <Box sx={justifyCenterBlock}>
          <Pagination 
            count={count} 
            shape="rounded" 
            page={page} 
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                components={{previous: WestIcon, next: EastIcon}}
                {...item}
                slots={{ 
                  previous: () => (
                    <Box sx={paginationControls}>
                      <WestIcon /><Typography variant='h4'>Previous</Typography>
                    </Box>
                  ), 
                  next: () => (
                    <Box sx={paginationControls}>
                      <Typography variant='h4'>Next</Typography> <EastIcon />
                    </Box>
                  )
                }}
              />
            )}
          />
      </Box>
    </>
  );
};

