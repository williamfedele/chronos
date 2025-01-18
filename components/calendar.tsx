"use client";
import { useState } from "react";

export const Calendar = () => {
  const [view, setView] = useState("day");
  return (
    <div>
      <div className="space-x-4">
        <button onClick={() => setView("day")}>Days</button>
        <button onClick={() => setView("month")}>Month</button>
      </div>
      <div>
        {view === "day" && <DayView />}
        {view === "month" && <MonthView />}
      </div>
    </div>
  );
};

const DayView = () => {
  return (
    <div className="space-x-1">
      <p>test</p>
      {Array.from({ length: 365 }, (_, index) => (
        <span key={index + 1}>. </span>
      ))}
    </div>
  );
};
const MonthView = () => {
  return <div>Month View Content</div>;
};
