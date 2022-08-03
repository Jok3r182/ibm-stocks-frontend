import { Box } from "@mui/material";
import React from "react";
import DateContext from "../../../store/DateContext";
import { useContext, useState, useEffect, useCallback } from "react";
import { fetchCompanyStockData } from "../../../utils/Http";
import { convertToSeconds } from "../../../utils/Date";

function CandleStickChart({ companyName }) {
  const [stocks, setStocks] = useState()
  const dateCtx = useContext(DateContext);

  const fetchStocks = useCallback(async () => {
    const response = await fetchCompanyStockData(companyName, convertToSeconds(dateCtx.startDateState),  convertToSeconds(dateCtx.endDateState));
    setStocks(response)
  }, [companyName, dateCtx.startDateState, dateCtx.endDateState]);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div>{'oof'}</div>
    </Box>
  );
}

export default CandleStickChart;
