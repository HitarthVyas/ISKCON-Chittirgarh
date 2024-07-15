'use client'
import React from "react";
import CarouselPoster from "@/components/Festivals/SnanYatra/02carousel/CarouselPoster";
import MainPoster from "@/components/Festivals/SnanYatra/01MainPoster/MainPoster";
import DiscriptionSection from "@/components/Festivals/SnanYatra/03Discription/DiscriptionSection";
import DonationSection from "@/components/Festivals/SnanYatra/04DontaionSection/DonationSection";

const SnanYatra = () => {
  return (
    <div>
      <MainPoster /> 
     <DiscriptionSection />
      {/* <CarouselPoster /> */}
      <DonationSection />
    </div>
  );
};

export default SnanYatra;
