"use client";
import { useState } from "react";

const getCurrentDayOfYear = () => {
  const now = new Date();
  const dayOne = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - dayOne.getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return Math.floor(diff / oneDayMs);
};

export const Calendar = () => {
  const [view, setView] = useState("day");

  const currentDay = getCurrentDayOfYear();
  const percentageOfYear = Math.round((currentDay / 365) * 100);

  return (
    <div className="space-y-8 w-full">
      <div className="flex justify-between text-2xl">
        <div>{new Date().getFullYear()}</div>
        <div>
          <button
            className={`${view === "day" ? "text-primary" : "text-accent"} border-r pr-4`}
            onClick={() => setView("day")}
          >
            Days
          </button>
          <button
            className={`${view === "month" ? "text-primary" : "text-accent"} pl-4`}
            onClick={() => setView("month")}
          >
            Months
          </button>
        </div>
      </div>
      <hr></hr>
      <div>
        {view === "day" && <DayView />}
        {view === "month" && <MonthView />}
      </div>
      <hr></hr>
      <div className="flex justify-between text-2xl text-primary">
        <div className="uppercase">{365 - currentDay} days left</div>
        <div className="uppercase">{percentageOfYear}% complete</div>
      </div>
    </div>
  );
};

const DayView = () => {
  const currentDay = getCurrentDayOfYear();

  return (
    <div className="flex flex-wrap gap-3 justify-items-center">
      {[...Array(365)].map((_, index) => {
        const dayNumber = index + 1;
        return (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full flex-none
              ${dayNumber < currentDay ? "bg-primary-foreground" : "bg-primary"}
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
    <div className="w-full flex flex-wrap gap-8 text-2xl">
      {months.map((month, index) => {
        return (
          <div
            key={index}
            className={`
              ${
                index < currentMonth
                  ? "text-primary-foreground"
                  : "text-primary"
              }
            `}
          >
            {month}
          </div>
        );
      })}
    </div>
  );
};
