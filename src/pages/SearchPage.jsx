import React from "react";
import { Box } from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensions";
import { useState } from "react";
import CompanyList from "../components/page-content/companiesOutput/CompanyList";
import Search from "../components/page-content/forms/Search";
import { SearchStyle } from "../components/page-content/forms/SearchStyles";

function SearchPage() {
  const { height, width } = useWindowDimensions();
  const [companies, setCompanies] = useState([]);
 

  return (
    <Box
      sx={{ height: height, ...SearchStyle.searchPageWrapper}}
    >
     <Search setCompanies={setCompanies} companies={companies}/>
      <CompanyList items={companies} />
    </Box>
  );
}

export default SearchPage;
