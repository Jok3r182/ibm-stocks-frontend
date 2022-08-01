import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensions";
import Button from "@mui/material/Button";
import Datepicker from "../components/page-content/datepicker/Datepicker";
import { CustomTextField } from "../components/page-content/input/CustomTextField";
import { tertiary700 } from "../constants/Colors";
import { useState } from "react";
import { checkDates, checkInputField } from "../utils/Error";
import { CustomTextFieldError } from "../components/page-content/input/CustomTextFieldError";
import { inputFieldMaxLength } from "../constants/Constants";

function SearchPage() {
  const { height, width } = useWindowDimensions();
  const [inputValue, setInputValue] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [inputError, setInputError] = useState("");
  const [startDate, setStartDate] = useState(new Date().getTime());
  const [endDate, setEndDate] = useState(new Date().getTime());

  function startDateHandler(date) {
    checkDates(date, endDate, setStartDateError, setEndDateError)
    setStartDate(date);
  }

  function endDateHandler(date) {
    checkDates(startDate, date, setStartDateError, setEndDateError)
    setEndDate(date);
  }

  function submissionHandler() {
    if (checkInputField(inputValue, setInputError) && checkDates(startDate, endDate, setStartDateError, setEndDateError)) {
     
    }
  }
  console.log(inputValue)
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: height }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CustomTextField
          label={inputError !== ''? inputError : "Company name"}
          sx={inputError !== ''? {m: 1, ...CustomTextFieldError} : { m: 1 }}
          inputProps={{ maxLength: inputFieldMaxLength }}
          value={inputValue}
          onChange={(e) => {
            checkInputField(e.target.value, setInputError)
            setInputValue(e.target.value);
          }}
        />
        <Box flexDirection="row" display="flex">
          <Datepicker
            errorLabel={startDateError}
            onDatePicked={startDateHandler}
            label="Start Date"
            style={{ display: "flex", flexGrow: 1 }}
            errorStyle={CustomTextFieldError}
          />
          <Datepicker
            errorLabel={endDateError}
            onDatePicked={endDateHandler}
            label="End Date"
            style={{ display: "flex", flexGrow: 1 }}
            errorStyle={CustomTextFieldError}
          />
        </Box>
        <Button
          sx={{
            m: 1,
            display: "flex",
            flexGrow: 1,
            backgroundColor: tertiary700,
            "&:hover": {
              backgroundColor: tertiary700,
            },
          }}
          variant="contained"
          onClick={submissionHandler}
        >
          Search
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchPage;
