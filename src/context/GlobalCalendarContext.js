import { createContext } from "react";

const GlobalCalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export default GlobalCalendarContext;
