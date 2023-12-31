import logo from "../../assets/logo.png";
import { useContext } from "react";
import GlobalCalendarContext from "../../context/GlobalCalendarContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalCalendarContext);
  function handleNextMonth() {
    //console.log("button clicked");
    setMonthIndex(monthIndex + 1);
  }
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleResetToday() {
    setMonthIndex(dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl font-bold text-gray-500">Calendar</h1>
      <button
        onClick={handleResetToday}
        className="border border-gray-500 rounded-lg py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 font-bold text-xl text-gray-600">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
