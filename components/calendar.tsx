"use client";
import { useState } from "react";

export const Calendar = () => {
  const [view, setView] = useState("day");
  return (
    <div className="space-y-4 w-full ">
      <div className="space-x-4 border-b p-2">
        <button
          className={`${view === "day" ? "text-foreground" : "text-accent"}`}
          onClick={() => setView("day")}
        >
          Days
        </button>
        <button
          className={`${view === "month" ? "text-foreground" : "text-accent"}`}
          onClick={() => setView("month")}
        >
          Month
        </button>
      </div>
      <div className="">
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
    const diff = now.getTime() - dayOne.getTime();
    const oneDayMs = 24 * 60 * 60 * 1000;
    return Math.floor(diff / oneDayMs);
  };

  const currentDay = getCurrentDayOfYear();

  return (
    <div className="w-full flex flex-wrap gap-4 justify-start">
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
  const months = Array.from({ length: 12 }, (_, i) => {
    return new Date(0, i)
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
  });

  const currentMonth = new Date().getMonth();

  return (
    <div className="w-full flex flex-wrap gap-8 text-4xl">
      {months.map((month, index) => {
        return (
          <div
            key={index}
            className={`${index === currentMonth ? "text-foreground" : index < currentMonth ? "text-primary-foreground" : "text-accent"}`}
          >
            {month}
          </div>
        );
      })}
    </div>
  );
};
