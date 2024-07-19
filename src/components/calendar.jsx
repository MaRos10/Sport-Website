import { useState } from "react";
import "./calendar.css";

export default function Calendar() {
  // Store selected date
  const [sDate, setsDate] = useState(new Date());
  // Games
  const [games, setGames] = useState([]);

  // Find the total days of the current month
  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
  };

  // Find the first day of the current month
  const findFirstDay = (y, m) => {
    return new Date(y, m, 1).getDay();
  };

  // Changing to previous/next month. Selects date to 1st day of month
  const changeToPrevMonth = () => {
    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  // Change selected date when user clicks any day + add game
  const handleDateClick = (date) => {
    const gameName = prompt("Ange match (format: Lag - Lag)");
    if (gameName) {
      setGames([...games, { date: date.toLocaleDateString(), name: gameName }]);
    }
    setsDate(date);
  };

  // Show calender component

  // What we take from selected date
  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    // Array to store all days
    const allDays = [];

    // For empty cells
    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    }

    // Show actual days

    // Iteration equal to the month days to store the days component into allDays array
    for (let d = 1; d <= mDays; d++) {
      // Create a new date with current d, m, y and push to the array
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div
          key={`d-${d}`}
          // If date is selected, add the selected class name to the day
          className={`box ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {d}
        </div>
      );
    }

    return allDays;
  };

  return (
    <div>
      <div className="main">
        <div className="header">
          <button onClick={changeToPrevMonth}> {"<"} </button>
          <h2>
            {sDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button onClick={changeToNextMonth}> {">"} </button>
        </div>
        <div className="body">{showCalendar()}</div>
        {sDate && (
          <div className="selected-date">
            Valt datum: {sDate.toLocaleDateString()}
            <ul>
              {games
                .filter((game) => game.date === sDate.toLocaleDateString())
                .map((game, index) => (
                  <li key={index}>{game.name}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
