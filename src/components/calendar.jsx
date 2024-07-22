import { useState } from "react";
import "./calendar.css";

export default function Calendar() {
  // State variables for selected date, games, form visibility and form inputs
  const [sDate, setsDate] = useState(new Date());
  const [games, setGames] = useState([]);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [time, setTime] = useState("");

  // Find the total days in a given month
  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
  };

  // Find the first day of a given month
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

  // Handle date click and show form
  const handleDateClick = (date) => {
    setsDate(date);
    setIsDateSelected(true);
    setShowForm(false);
  };

  // Show the form to add a new game
  const handleAddGameClick = () => {
    setShowForm(true);
  };

  // Add a game
  const addGame = (e) => {
    e.preventDefault();
    if (team1 && team2 && time) {
      const gameName = `${team1} - ${team2} kl. ${time}`;
      setGames([
        ...games,
        { date: sDate.toLocaleDateString(), name: gameName },
      ]);
      setTeam1("");
      setTeam2("");
      setTime("");
      setShowForm(false);
    }
  };

  // Remove a game
  const removeGame = (index) => {
    setGames(games.filter((_, i) => i !== index));
  };

  // Generate the calendar days for the current month
  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    // Array to store all days
    const allDays = [];

    // Add empty boxes for days before the first day of the month
    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    }

    // Add boxes for each day in the current month
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
        {/* Header with buttons to change month, and display current month and year */}
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

        {/* Calendar body showing all days */}
        <div className="body">{showCalendar()}</div>

        {/* Selected date and games for that date */}
        {sDate && (
          <div className="selected-date">
            Valt datum: {sDate.toLocaleDateString()}
            <ul>
              {games
                .filter((game) => game.date === sDate.toLocaleDateString())
                .map((game, index) => (
                  <li key={index}>
                    {game.name}
                    <button onClick={() => removeGame(index)}>Ta bort</button>
                  </li>
                ))}
            </ul>
            {/* Button to show the form to add a new game */}
            {!showForm && (
              <button onClick={handleAddGameClick}>Lägg till match</button>
            )}
            {/* Form to add a new game  */}
            {showForm && (
              <form onSubmit={addGame}>
                <div>
                  <label>
                    Lag 1:
                    <input
                      type="text"
                      value={team1}
                      onChange={(e) => setTeam1(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Lag 2:
                    <input
                      type="text"
                      value={team2}
                      onChange={(e) => setTeam2(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Klockslag:
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <button type="submit">OK</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
