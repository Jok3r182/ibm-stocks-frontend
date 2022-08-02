import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Datepicker from "../datepicker/Datepicker";
import { CustomTextField } from "../input/CustomTextField";
import { useState } from "react";
import {
  checkDate,
  checkIfArrayContainsElement,
  checkInputField,
  checkResponseData,
} from "../../../utils/Error";
import { CustomTextFieldErrorStyle } from "../input/CustomTextFieldErrorStyle";
import { inputFieldMaxLength } from "../../../constants/Constants";
import { fetchCompanyData } from "../../../utils/Http";
import { SearchStyle } from "./SearchStyles";

function Search({ setCompanies, companies }) {
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [startDate, setStartDate] = useState(new Date().getTime());
  const [endDate, setEndDate] = useState(new Date().getTime());

  function startDateHandler(date) {
    if (checkDate(date, setStartDateError)) {
      setStartDate(date);
    }
  }

  function endDateHandler(date) {
    if (checkDate(date, setEndDateError)) {
      setEndDate(date);
    }
  }

  async function submissionHandler() {
    if (checkInputField(inputValue, setInputError)) {
      const data = await fetchCompanyData(inputValue);
      if (
        checkResponseData(data, setInputError) &&
        checkIfArrayContainsElement(data, companies, setInputError)
      ) {
        setCompanies((companies) => [...companies, data]);
      }
    }
  }

  return (
    <Box sx={SearchStyle.formWrapper}>
      <Box sx={SearchStyle.fieldWrapper}>
        <CustomTextField
          label={inputError !== "" ? inputError : "Company name"}
          sx={
            inputError !== ""
              ? { m: 1, ...CustomTextFieldErrorStyle }
              : { m: 1 }
          }
          inputProps={{ maxLength: inputFieldMaxLength }}
          value={inputValue}
          onChange={(e) => {
            checkInputField(e.target.value, setInputError);
            setInputValue(e.target.value);
          }}
        />
        <Box sx={SearchStyle.dateWrapper}>
          <Datepicker
            onDatePicked={startDateHandler}
            label="Start Date"
            style={SearchStyle.datepickerStyle}
            endDateConstraint={endDate}
            errorLabel={startDateError}
          />
          <Datepicker
            onDatePicked={endDateHandler}
            label="End Date"
            style={SearchStyle.datepickerStyle}
            startDateConstraint={startDate}
            errorLabel={endDateError}
          />
        </Box>
        <Button
          sx={SearchStyle.buttonStyle}
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

export default Search;
