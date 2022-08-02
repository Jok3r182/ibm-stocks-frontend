import React from "react";
import CompanyItem from "./CompanyItem";
import { Box } from "@mui/material";
import useWindowDimensions from "../../../hooks/WindowDimensions";

function CompanyList({ items }) {
  const {width, height} = useWindowDimensions()
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexShrink:1, flexGrow: 1, m: 1, flex:1, maxHeight:height/2, maxWidth: width, width: '100%', flexWrap: 'wrap'}}
    >
      {items.map((item) => (
        <CompanyItem key={item.name} data={item} />
      ))}
    </Box>
  );
}

export default CompanyList;
