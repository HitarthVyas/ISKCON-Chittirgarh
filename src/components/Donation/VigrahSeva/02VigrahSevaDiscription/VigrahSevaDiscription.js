"use client";
import { Architects_Daughter } from "next/font/google";
import React from "react";
import MainPoster from "../03CircleCarousel/MainPoster";
import DonationPlan from "../04DonationPlan/DonationPlan";


const Architects = Architects_Daughter({
    subsets: ["latin"],
    weight: ["400"],
  });

const VaishanvSevaDiscription = () => {
  return (
    <div>
      {" "}
      <div
        className="w-full  bg-cover bg-center py-10"
        style={{
          background:
            "linear-gradient(to bottom, #ca0b18 10%, #e75e16 90%, #ffaf2f )",
        }}
      >
        <div className=" flex flex-col px-60 max-lg:px-5 mb-20">
          <div className="py-2 text-center">
            <h2
              className={`text-[#FFD700] text-[64px] ${Architects.className}`}
            >
              Anna Daan
            </h2>
          </div>
          <div className=" py-2 text-[#ffffff] text-[28px] text-center">
            <strong className={`text-[#ffffff] ${Architects.className} `}>
              Those who serve Krishna with unwavering faith will surely
              experience his divine response. Chanting the mantra “Hare Krishna,
              Hare Krishna, Krishna Krishna, Hare Hare.. Hare Rama, Hare Rama,
              Rama Rama, Hare Hare..” brings immense peace and inner strength to
              navigate the challenging phases of life.
            </strong>
          </div>
        </div>
        <MainPoster />
        <DonationPlan />
      </div>
    </div>
  );
};

export default VaishanvSevaDiscription;
