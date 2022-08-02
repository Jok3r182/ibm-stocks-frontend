import React from 'react'
import { Box } from '@mui/system'
import { tertiary700 } from '../../../constants/Colors'
import { Link } from '@mui/material'
import { Payments, Flag, Link as URL } from '@mui/icons-material'
import IconField from '../input/IconField'

function CompanyItem({data}) {
  const iconStyle = { color: 'white', mr: 1, my: 0.5, mx: 1 }
  return (
    <Box sx={{backgroundColor: tertiary700, borderWidth: 2, borderRadius: 1, minWidth: '25%', maxWidth: '25%', justifyContent:'center',  alignItems: "center", flex:'1', flexGrow:'1',
    flexDirection:'column', m: 1, display: 'flex'}}>
       <Link sx={{color: 'white', fontSize: 18, m: 0.5}} color="inherit" href='/chart'>{data.name}</Link>
       <IconField label={`Currency:\t${data.currency}`}> <Payments sx={iconStyle}/></IconField>
       <IconField label={`Country:\t${data.country}`}> <Flag sx={iconStyle}/></IconField>
       <IconField label={`WebUrl: ${data.weburl}`}> <URL sx={iconStyle}/></IconField>
    </Box>
  )
}

export default CompanyItem