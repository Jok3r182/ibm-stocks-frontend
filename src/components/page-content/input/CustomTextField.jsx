import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { secondary200, tertiary700 } from '../../../constants/Colors';
export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: secondary200,
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
      color: secondary200
    },
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{
      color: secondary200
    },
    "& label": {
      color: secondary200
    },
    "&:hover fieldset": {
      borderColor: secondary200,
    },
    "&.Mui-focused fieldset": {
      borderColor: secondary200
    },
    "& .MuiSvgIcon-root":{
      color: tertiary700
    }
  });