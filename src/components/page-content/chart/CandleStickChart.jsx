import { Box, CircularProgress } from "@mui/material";
import React from "react";
import DateContext from "../../../store/DateContext";
import { useContext, useState, useEffect, useCallback } from "react";
import { fetchCompanyStockData } from "../../../utils/Http";
import Chart from "react-apexcharts";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import { constChartScaleHigher, constChartScaleLower } from "../../../constants/Constants";
import { checkResolution, convertTimestampToSeconds } from "../../../utils/Date";
import { primary500 } from "../../../constants/Colors";
import { additionalOptions } from "./CandleStickChartOptions";
import Lottie from 'lottie-react'
import Nodata from '../../../assets/lottie/nodata.json'

function CandleStickChart({ companyName, companySymbol }) {
  const [stocks, setStocks] = useState([])
  const {height, width} = useWindowDimensions()
  const [loading, setLoading] = useState(false)
  const dateCtx = useContext(DateContext);

  const fetchStocks = useCallback(async () => {
    setLoading(true)
    const stocks = await fetchCompanyStockData(companySymbol, checkResolution(dateCtx.startDateState, dateCtx.endDateState),  convertTimestampToSeconds(dateCtx.startDateState),  convertTimestampToSeconds(dateCtx.endDateState));
    setStocks(stocks)
    setLoading(false)

  }, [companySymbol, dateCtx.startDateState, dateCtx.endDateState]);

  const options = {
    series: [{
      name: 'candle',
      data: stocks
    }],
    options: {
      chart: {
        type: 'candlestick',
        background:`white`,
      },
      title: {
        text: companyName,
        align: 'left'
      },
      ...additionalOptions
    },
  }

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);


  const scale = stocks.length>10? constChartScaleHigher : constChartScaleLower

  if(stocks.length === 0 && loading === false){
    return <Lottie
    style={{height: 500, width: 500}}
    animationData={Nodata}
    autoPlay={true}
    loop={true}
  />
  }

  return (
   <Box display='flex' flex='1' justifyContent='center' alignItems='center'>
      {loading? <CircularProgress sx={{color: primary500}}/> : <Chart {...options}  type="candlestick" height={height*scale} width={width*scale} />}
 </Box>
  );
}

export default CandleStickChart;
