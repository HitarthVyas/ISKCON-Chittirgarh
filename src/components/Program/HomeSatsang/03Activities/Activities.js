"use client";

import { Permanent_Marker } from "next/font/google";
import { activities } from "./activitiesData";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Activities = () => {
  return (
    <section className="bg-[#e1dfea] py-14 px-5">
      <h1
        className={`${marker.className} text-[#e75e16] pb-10 text-center text-6xl`}
      >
        What We Do
      </h1>
      <div className="flex max-w-screen-xl m-auto justify-evenly gap-4 gap-y-10 flex-wrap">
        {activities.map((activity, index) => (
          <div key={index} className="w-72 bg-white rounded-md border-b-4 border-b-[#9eadc6] shadow-lg border border-gray-300 transition-all duration-500 hover:scale-105">
            <img
              src={activity.image}
              alt={activity.name}
              className="h-52 object-cover rounded-t-md"
            />
            <h3 className="text-center font-medium bg-[#ffaf2f] mx-3 hover:mx-0 hover:rounded-none transition-all duration-300 -mt-4 z-10 relative rounded shadow-md text-white py-2 text-3xl">
              {activity.title}
            </h3>
            <p className="text-justify p-4">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
