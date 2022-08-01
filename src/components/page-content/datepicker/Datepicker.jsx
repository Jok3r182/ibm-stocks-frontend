import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CustomTextField } from "../input/CustomTextField";
import { useState } from "react";
import { convertDateToTimestamp } from "../../../utils/Date";

export default function Datepicker({style, label, onDatePicked}) {
  const [value, setValue] = useState(new Date());
  
 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => (
          <CustomTextField
            sx={{
              m: 1,
              ...style
            }}
            {...props}
          />
        )}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          onDatePicked(convertDateToTimestamp(newValue))
        }}
      />
    </LocalizationProvider>
  );
}
