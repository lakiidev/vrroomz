import React, { useState } from "react";
import banner from "../assets/trybanner.jpg";
import calendar from "../assets/trycalendar.jpg";
import Calendar from "react-calendar";
const Try = () => {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  function navigationLabel({ date, view }) {
    if (view === "month") {
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      return `${month} ${year}`;
    }
  }
  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" }).slice(0, 1);
  };
  return (
    <section className="try">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="try-info">
        <h2>
          Try <br /> virtual, <br /> feel real
        </h2>
        <div className="calendar-container">
          <div className="img">
            <img src={calendar} alt="" />
          </div>
          <div className="calendar-wrapper">
            <Calendar
              value={date}
              onChange={setDate}
              minDate={today}
              maxDate={nextYear}
              maxDetail="month"
              minDetail="year"
              showNeighboringMonth={false}
              navigationLabel={navigationLabel}
              formatShortWeekday={formatShortWeekday}
              className="calendar"
            />
            <a href="" className="try-now">
              Try now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Try;
