import axios from "axios"

const API_KEY = 'cbkes6aad3if45782ol0'

export async function fetchCompanyData(companyName) {
  const response = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${companyName}&token=${API_KEY}`)
  return response.data

}

export async function fetchCompanyStockData(companyName, startDate, endDate){
  const response = await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${companyName}&resolution=D&from=${startDate}&to=${endDate}&token=${API_KEY}`)
  return response.data
}
