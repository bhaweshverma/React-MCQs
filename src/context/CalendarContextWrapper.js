import { useState } from "react";
import GlobalCalendarContext from "./GlobalCalendarContext";
import dayjs from "dayjs";

const CalendarContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalCalendarContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalCalendarContext.Provider>
  );
};

export default CalendarContextWrapper;
