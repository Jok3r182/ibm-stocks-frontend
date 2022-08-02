import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CustomTextField } from "../input/CustomTextField";
import { useState } from "react";
import { convertDateToTimestamp, dateManipulation } from "../../../utils/Date";
import React from "react";

export default function Datepicker({style, label, onDatePicked, startDateConstraint, endDateConstraint}) {
  
  const [value, setValue] = useState(label==='Start Date'? dateManipulation(endDateConstraint, 'minus', 1) : new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        maxDate={label==='Start Date'? dateManipulation(endDateConstraint, 'minus', 1) : dateManipulation(endDateConstraint, 'plus', 0) }
        minDate={label==='End Date'? new Date(startDateConstraint) : new Date('1970-01-01')}
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
