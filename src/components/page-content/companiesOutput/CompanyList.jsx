import React from "react";
import CompanyItem from "./CompanyItem";
import { Box } from "@mui/material";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import { CompanyListStyle } from "./CompanyListStyle";

function CompanyList({ items }) {
  const {width, height} = useWindowDimensions()
  return (
    <Box
      sx={ {maxHeight: height / 2, maxWidth: width, ...CompanyListStyle.list}}
    >
      {items.map((item) => (
        <CompanyItem key={item.name} data={item} />
      ))}
    </Box>
  );
}

export default CompanyList;
