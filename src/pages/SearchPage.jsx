import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensions";
import Button from "@mui/material/Button";
import Datepicker from "../components/page-content/datepicker/Datepicker";
import { CustomTextField } from "../components/page-content/input/CustomTextField";
import { tertiary700 } from "../constants/Colors";
import { useState } from "react";
import {
  checkIfArrayContainsElement,
  checkInputField,
  checkResponseData,
} from "../utils/Error";
import { CustomTextFieldError } from "../components/page-content/input/CustomTextFieldError";
import { inputFieldMaxLength } from "../constants/Constants";
import { fetchCompanyData } from "../utils/Http";
import CompanyList from "../components/page-content/companiesOutput/CompanyList";

function SearchPage() {
  const { height, width } = useWindowDimensions();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [startDate, setStartDate] = useState(new Date().getTime());
  const [endDate, setEndDate] = useState(new Date().getTime());
  const [companies, setCompanies] = useState([]);

  function startDateHandler(date) {
    setStartDate(date);
  }

  function endDateHandler(date) {
    setEndDate(date);
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
    <Box sx={{display:"flex", flex:1, flexGrow:1, flexDirection:"column", justifyContent:"center", alignItems:"center", height: height}}>
      <Box sx={{display:"flex", flexShrink:1, flexGrow: 1, flex: 1, justifyContent:"center", alignItems:"flex-end"}} >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CustomTextField
            label={inputError !== "" ? inputError : "Company name"}
            sx={
              inputError !== "" ? { m: 1, ...CustomTextFieldError } : { m: 1 }
            }
            inputProps={{ maxLength: inputFieldMaxLength }}
            value={inputValue}
            onChange={(e) => {
              checkInputField(e.target.value, setInputError);
              setInputValue(e.target.value);
            }}
          />
          <Box sx={{flexDirection:"row", display:"flex"}} >
            <Datepicker
              onDatePicked={startDateHandler}
              label="Start Date"
              style={{ display: "flex", flexGrow: 1 }}
              endDateConstraint={endDate}
            />
            <Datepicker
              onDatePicked={endDateHandler}
              label="End Date"
              style={{ display: "flex", flexGrow: 1 }}
              startDateConstraint={startDate}
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
      <CompanyList items={companies} />
    </Box>
  );
}

export default SearchPage;
