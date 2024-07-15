'use client'
import React from "react";
import MainPoster from "@/components/Festivals/SnanYatra/01MainPoster/MainPoster";
import DiscriptionSection from "@/components/Festivals/SnanYatra/03Discription/DiscriptionSection";
import DonationSection from "@/components/Festivals/SnanYatra/04DontaionSection/DonationSection";

const SnanYatra = () => {
  const gradientStyle = {
    background: "#74ebd5", // fallback for old browsers
    background: "-webkit-linear-gradient(to right, #ACB6E5, #74ebd5)", // Chrome 10-25, Safari 5.1-6
    background: "linear-gradient(to right, #ACB6E5, #74ebd5)" // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
  };

  return (
    <div style={gradientStyle}>
      <MainPoster /> 
     <DiscriptionSection />
      {/* <CarouselPoster /> */}
      <DonationSection />
    </div>
  );
};

export default SnanYatra;
