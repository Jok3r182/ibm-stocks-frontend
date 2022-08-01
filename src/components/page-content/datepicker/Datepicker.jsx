import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CustomTextField } from "../input/CustomTextField";
import { useState } from "react";
import { convertDateToTimestamp } from "../../../utils/Date";

export default function Datepicker({style, label, onDatePicked, errorLabel, errorStyle}) {
  const [value, setValue] = useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => (
          <CustomTextField
            sx={errorLabel !== ''?{m: 1, ...errorStyle}:{
              m: 1,
              ...style
            }}
            {...props}
          />
        )}
        label={errorLabel !== ''? errorLabel:label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          onDatePicked(convertDateToTimestamp(newValue))
        }}
      />
    </LocalizationProvider>
  );
}
