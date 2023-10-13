import { useState, useContext, useEffect } from "react";
import { getMonth } from "../../utilities/getMonth";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalCalendarContext from "../../context/GlobalCalendarContext";

const GoogleCalendar = () => {
  //console.table(getMonth(9));
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalCalendarContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default GoogleCalendar;
