import React from "react";
import CompanyItem from "./CompanyItem";
import { Box } from "@mui/material";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import { CompanyListStyle } from "./CompanyListStyle";

function CompanyList({ companies }) {
  const { width, height } = useWindowDimensions();
  console.log(companies)
  return (
    <Box
      sx={{ maxHeight: height / 2, maxWidth: width, ...CompanyListStyle.list }}
    >
      {companies.map((item) => (
        <CompanyItem key={item.name} companyData={item} />
      ))}
    </Box>
  );
}

export default CompanyList;
