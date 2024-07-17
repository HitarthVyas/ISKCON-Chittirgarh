import { Permanent_Marker, Sriracha, Tillana, Yatra_One } from "next/font/google";
import React from "react";

const  yatra = Sriracha({
    subsets: ["latin"],
    weight: ["400"],
})

const til = Tillana({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
})

const Banner = () => {
  return (
    <section
      className="relative bg-fixed h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/Images/ISKCONChittor/iskcon-chittor-banner.jpg')",
      }}
    >
        <div className="absolute bg-black/50 inset-0"></div>
        <div className={`absolute text-white w-full text-center bottom-1/3 px-4 ${yatra.className}`}>
            <h1 className={`${yatra.className} md:text-6xl text-4xl mb-2.5`}>ISKCON Chittorgarh</h1>
            <h4 className={`${til.className} md:text-2xl text-lg font-medium`}>First Floor, Union Bank Building, Chittorgarh</h4>
        </div>
    </section>
  );
};

export default Banner;
