import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { secondary300, tertiary700 } from '../../../constants/Colors';
export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderWidth: 2
      },
      '&:hover fieldset': {
        borderColor: 'white',
        borderWidth: 2
 
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        borderWidth: 2
      },
    },
    '& .MuiInputBase-input':{
      color: 'white',
    },
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{
      color: 'white'
    },
    "& label": {
      color: 'white'
    },
    "&:hover fieldset": {
      borderColor: 'white',
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: 'white',
      borderWidth: 2
    },
    "& .MuiSvgIcon-root":{
      color: secondary300,
      
    },
    input:{background: `linear-gradient(-90deg, ${tertiary700}, ${secondary300} 90%)`, color: 'white', borderRadius: 3}
  });