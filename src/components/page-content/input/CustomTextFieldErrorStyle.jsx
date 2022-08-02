import { errorColor } from "../../../constants/Colors";

export const CustomTextFieldErrorStyle = { '& label.Mui-focused': {
    color: errorColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: errorColor,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: errorColor,
    },
    '&:hover fieldset': {
      borderColor: errorColor,
    },
    '&.Mui-focused fieldset': {
      borderColor: errorColor,
    },
  },
  '& .MuiInputBase-input':{
    color: errorColor
  },
  '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{
    color: errorColor
  },
  "& label": {
    color: errorColor
  },
  "&:hover fieldset": {
    borderColor: errorColor,
  },
  "&.Mui-focused fieldset": {
    borderColor: errorColor
  },
  }