import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CustomTextField } from "../input/CustomTextField";
import { useState } from "react";
import { convertDateToTimestamp } from "../../../utils/Date";
import React from "react";
import { CustomTextFieldErrorStyle } from "../input/CustomTextFieldErrorStyle";

export default function Datepicker({
  style,
  label,
  onDatePicked,
  maxDate,
  minDate,
  errorLabel,
  date,
}) {
  const [value, setValue] = useState(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        maxDate={maxDate}
        minDate={minDate}
        renderInput={(props) => (
          <CustomTextField
            sx={
              errorLabel !== ""
                ? { m: 1, ...CustomTextFieldErrorStyle }
                : {
                    m: 1,
                    ...style,
                  }
            }
            {...props}
          />
        )}
        label={errorLabel === "" ? label : errorLabel}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          onDatePicked(convertDateToTimestamp(newValue));
        }}
      />
    </LocalizationProvider>
  );
}
