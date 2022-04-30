import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function DatePicker({ date, setDate }) {
  const [day, setDay] = useState(31);
  function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  const { user } = useSelector((store) => store.user);
  const defaultValue = user?.birthday?.split("-") || [];
  useEffect(() => {
    date.month && setDay(days[Number(date?.month - 1)]);
    if (leapYear(date?.year) && Number(date?.month - 1) === 1) {
      setDay(29);
    }
  }, [date?.month, date?.year, date?.day]);
  const handleRenderDate = () => {
    return (
      <div className="date">
        <div className="date-year date-item">
          <select
            defaultValue={defaultValue[0]}
            value={defaultValue[0]}
            onChange={(e) => {
              setDate({
                ...date,
                day: e.currentTarget.value,
              });
            }}
          >
            {defaultValue[0] && <option>{defaultValue[0]}</option>}
            {[...Array(day).keys()].map((item, index) => (
              <option key={index} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="date-month date-item">
          <select
            defaultValue={defaultValue[1]}
            value={defaultValue[1]}
            onChange={(e) => {
              setDate({
                ...date,
                month: e.currentTarget.value,
              });
            }}
          >
            {defaultValue[1] && (
              <option value={defaultValue[1]}>{defaultValue[1]}</option>
            )}
            {[...Array(12).keys()].map((item, index) => (
              <option key={index}>{item + 1}</option>
            ))}
          </select>
        </div>
        <div className="date-day date-item">
          <select
            defaultValue={defaultValue[2]}
            value={defaultValue[2]}
            onChange={(e) => {
              setDate({
                ...date,
                year: e.currentTarget.value,
              });
            }}
          >
            {defaultValue[2] && (
              <option value={defaultValue[2]}>{defaultValue[2]}</option>
            )}
            {[...Array(50).keys()].map((item, index) => (
              <option key={index}>{1973 + item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  return <>{handleRenderDate()}</>;
}

export default DatePicker;
