"use client"

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { glorifications } from "./glorificationData";

const Glorification = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className=" bg-[#171056] pt-10 pb-28"
    >
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        interval={5000}
        showThumbs={false}
        selectedItem={index}
        onChange={handleSelect}
      >
        {glorifications.map((glorification, index) => (
          <div key={index}>
            <div className="w-[97%] md:w-10/12 mx-auto px-4 md:px-6 py-6 bg-[#d17a29] gap-2 md:gap-5 flex flex-col md:flex-row items-center rounded-xl max-w-screen-lg">
              <img
                src={glorification.img}
                className="h-[160px] max-w-[160px] object-cover rounded-full block"
              />
              <div>
                <p className="text-[16px] text-white text-justify">
                  {glorification.statement}
                </p>
                <p className="text-[20px] text-right font-semibold text-white">
                  - {glorification.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Glorification;