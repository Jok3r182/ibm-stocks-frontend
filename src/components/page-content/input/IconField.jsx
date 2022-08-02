import React from 'react'
import { Box } from '@mui/system'
import { CustomTextFieldIcon } from './CustomTextFieldIcon'
import { IconFieldStyle } from './IconFieldStyle'

function IconField({label, children}) {
  return (
    <Box  sx={IconFieldStyle.item}>
        {children}
        <CustomTextFieldIcon sx={IconFieldStyle.field} disabled label={label} variant="standard"/>
      </Box>
  )
}

export default IconField