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
import { useContext } from "react";
import DateContext from "../../../store/DateContext";
import { dateManipulation } from "../../../utils/Date";

function Search({ setCompanies, companies }) {
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const dateCtx = useContext(DateContext)

  function startDateHandler(date) {
    if (checkDate(date, setStartDateError)) {
      dateCtx.setStartDate(date)
    }
  }

  function endDateHandler(date) {
    if (checkDate(date, setEndDateError)) {
      dateCtx.setEndDate(date)
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
            maxDate = {dateManipulation(dateCtx.endDateState, 'minus', 1)}
            minDate = {new Date('1970-01-01')}
            onDatePicked={startDateHandler}
            date = {dateCtx.startDateState}
            label="Start Date"
            style={SearchStyle.datepickerStyle}
            errorLabel={startDateError}
          />
          <Datepicker
            maxDate = {new Date()}
            minDate = {dateManipulation(dateCtx.startDateState, 'sum', 1)}
            onDatePicked={endDateHandler}
            label="End Date"
            date = {dateCtx.endDateState}
            style={SearchStyle.datepickerStyle}
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
