import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { secondary200, tertiary700 } from '../../../constants/Colors';
export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: tertiary700,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: secondary200,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: secondary200,
      },
      '&:hover fieldset': {
        borderColor: secondary200,
      },
      '&.Mui-focused fieldset': {
        borderColor: secondary200,
      },
    },
    '& .MuiInputBase-input':{
      color: tertiary700,
    },
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{
      color: tertiary700
    },
    "& label": {
      color: tertiary700
    },
    "&:hover fieldset": {
      borderColor: tertiary700,
    },
    "&.Mui-focused fieldset": {
      borderColor: tertiary700
    },
    "& .MuiSvgIcon-root":{
      color: tertiary700,
    },
    input:{backgroundColor: secondary200, color: tertiary700}
  });