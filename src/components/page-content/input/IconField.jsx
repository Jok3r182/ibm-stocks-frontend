import React from 'react'
import { Box } from '@mui/system'
import { CustomTextFieldIcon } from './CustomTextFieldIcon'

function IconField({label, children}) {
  return (
    <Box  sx={{width: '100%', display:"flex", alignItems: 'flex-end'}}>
        {children}
        <CustomTextFieldIcon sx={{mx: 1, width: '100%'}} disabled label={label} variant="standard"/>
      </Box>
  )
}

export default IconField