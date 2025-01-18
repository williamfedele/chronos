"use client";
import { useState } from "react";

export const Calendar = () => {
  const [view, setView] = useState("day");
  return (
    <div className="space-y-4">
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

  const getCurrentDayOfYear = () => {
    const now = new Date();
    const dayOne = new Date(now.getFullYear(), 0, 0);
    const diff = now - dayOne;
    const oneDayMs = 24 * 60 * 60 * 1000;
    return Math.floor(diff / oneDayMs);
  };

  const currentDay = getCurrentDayOfYear();

  return (
    <div className="w-full flex flex-wrap gap-4">
      {[...Array(365)].map((_, index) => {
        const dayNumber = index + 1;
        return (
          <div
            key={index}
            className={`
              w-1 h-1 rounded-full transition-colors
              ${
                dayNumber === currentDay
                  ? "bg-foreground"
                  : dayNumber < currentDay
                    ? "bg-primary-foreground"
                    : "bg-accent"
              }
            `}
          />
        );
      })}
    </div>
  );
};
const MonthView = () => {
  return <div>Month View Content</div>;
};
