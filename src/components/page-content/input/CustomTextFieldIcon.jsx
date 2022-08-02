import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomTextFieldIcon = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-input':{
      color: 'white'
    },
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{
      color: 'white'
    },
    "& label": {
      color: 'white'
    },
    "&:hover fieldset": {
      borderColor: 'white',
    },
    "&.Mui-focused fieldset": {
      borderColor: 'white'
    },
    "& .Mui-disabled":{
      color: 'white !important',
      '& .Mui-disabled:before':{
        color: 'white !important',
      },
      '& .Mui-disabled:after':{
        color: 'white !important',
      }
    },
    '& .css-1ptx2yq-MuiInputBase-root-MuiInput-root.Mui-disabled:before':{
        borderBottomColor: 'white !important',
        borderBottom: 'none'
    },
    '& .css-1ptx2yq-MuiInputBase-root-MuiInput-root.Mui-disabled:after':{
        borderBottomColor: 'white !important',
        borderBottom: '1px solid'
    }
  });