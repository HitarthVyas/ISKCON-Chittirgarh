"use client";
import { useState } from "react";
import { Calendar, Badge } from "rsuite";
import { LuClock4 } from "react-icons/lu";
import "./HomeCalendar.css";
import { eventList } from "./events";

const HomeCalendar = () => {
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  function handleDateClick(date) {
    const key = date.toISOString().split("T")[0];
    const list = eventList[key] || [];
    setSelectedDateEvents(list);
  }

  function renderCell(date) {
    const key = date.toISOString().split("T")[0];
    const list = eventList[key] || [];

    if (list.length) {
      return (
        <Badge
          content="Event"
          onClick={() => handleDateClick(date)}
        />
      );
    }

    return null;
  }

  return (
    <div className="w-full p-1 md:p-10 py-12 flex font-medium bg-[#e1dfea] flex-col items-center justify-center">
      <span className="text-4xl text-[#e75e16] mb-5">Events Calendar</span>
      <div className="max-w-screen-lg">
        <Calendar bordered renderCell={renderCell} />
      </div>
      <div className="w-[97%] max-h-40 p-2 mt-5 overflow-auto border-[1px] border-[#2e5697] max-w-screen-sm">
        {selectedDateEvents.map((event, index) => (
          <div key={index} className="flex items-center flex-col">
            <span className="flex gap-2 items-center">
              <LuClock4 className="text-[#ca0b18]" />
              <b>{event.time}</b>
            </span>
            <div>{event.title}</div>
            <div className="h-[1px] my-1 bg-gray-600 w-4/5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCalendar;
