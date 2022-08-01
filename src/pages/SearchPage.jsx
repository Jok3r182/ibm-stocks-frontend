import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensions";
import Button from "@mui/material/Button";
import Datepicker from "../components/page-content/datepicker/Datepicker";
import { CustomTextField } from "../components/page-content/input/CustomTextField";
import {tertiary700 } from "../constants/Colors";

function SearchPage() {
  const { height, width } = useWindowDimensions();
  

  function startDateHandler(date){
    
  }

  function endDateHandler(date){
   
  }

  function submissionHandler(){

  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: height }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CustomTextField label="Company name" sx={{ m: 1 }} />
        <Box flexDirection="row" display="flex">
          <Datepicker
            onDatePicked={startDateHandler}
            label="Start Date"
            style={{ display: "flex", flexGrow: 1 }}
          />
          <Datepicker
            onDatePicked={endDateHandler}
            label="End Date"
            style={{ display: "flex", flexGrow: 1 }}
          />
        </Box>
        <Button
          sx={{
            m: 1,
            display: "flex",
            flexGrow: 1,
            backgroundColor: tertiary700,
            '&:hover': {
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
