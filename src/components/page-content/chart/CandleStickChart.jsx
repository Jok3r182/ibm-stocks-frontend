import { Box } from '@mui/material'
import React from 'react'
import useWindowDimensions from '../../../hooks/WindowDimensions';
function CandleStickChart() {

const { height, width } = useWindowDimensions();


  return (
    <Box display="flex"
    justifyContent="center"
    alignItems="center"
    >
    <div>CandleStickChart</div>
    </Box>
  )
}

export default CandleStickChart