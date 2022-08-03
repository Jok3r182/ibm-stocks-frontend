import React from "react";
import { useState } from "react";
import { dateManipulation } from "../utils/Date";

const DateContext = React.createContext();

export const DateContextProvider = (props) => {
  const [startDate, setStartDate] = useState(
    dateManipulation(new Date().getTime(), "minus", 1).getTime()
  );
  const [endDate, setEndDate] = useState(new Date().getTime());

  const startDateHandler = (date) => {
    setStartDate(date);
  };

  const endDateHandler = (date) => {
    setEndDate(date);
  };

  const contextValue = {
    startDateState: startDate,
    endDateState: endDate,
    setStartDate: startDateHandler,
    setEndDate: endDateHandler,
  };

  return (
    <DateContext.Provider value={contextValue}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
