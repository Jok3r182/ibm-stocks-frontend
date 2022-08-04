import axios from "axios";

const API_KEY = "cbkes6aad3if45782ol0";

export async function fetchCompanyData(companyName) {
  const response = await axios.get(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${companyName}&token=${API_KEY}`
  );
  return response.data;
}

export async function fetchCompanyStockData(
  companyName,
  resolution,
  startDate,
  endDate
) {
  const response = await axios.get(
    `https://finnhub.io/api/v1/stock/candle?symbol=${companyName}&resolution=${resolution}&from=${startDate}&to=${endDate}&token=${API_KEY}`
  );
  const stocks = [];

  for (const item in response.data.c) {
    const companyStock = {
      x: new Date(response.data.t[item] * 1000),
      y: [
        response.data.o[item],
        response.data.h[item],
        response.data.l[item],
        response.data.c[item],
      ],
    };
    stocks.push(companyStock);
  }
  return stocks;
}


export function logCompanyName(companyName){
 
  const data = {
    name: companyName,
    date: new Date()
  }
  axios.post('http://localhost:8080/company/name', data)
}

export function logCompanyStocks(company, stocks){
  const data  ={
    name: company,
    stocks: stocks,
    date: new Date()
  }
  axios.post('http://localhost:8080/company/stocks', data)
}
