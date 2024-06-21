"use client";
import React from "react";
import { Playfair_Display, Barlow } from "next/font/google";
import AnnaDaanDiscription from "../02AnnaDaanDiscription/AnnaDaanDiscription";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const MainPoster = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="relative h-[80vh] max-[1043px]:h-[100vh]  w-full">
        <div className="absolute inset-0 bg-[url('/Donation/AnnaDaan/anna-dan-H.jpg')] bg-cover bg-top"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Semi-transparent overlay */}
        <div className="absolute flex flex-col items-center w-full top-[10vh] sm:top-[5vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${bar.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Anna Daan
          </h1>
          <div className="flex justify-center items-center py-7">
            <p
              className={`font-bold text-[28px] max-[500px]:text-[20px] text-white text-center ${playfair.className} bg-black bg-opacity-20 p-2 rounded-lg`}
              style={{ textShadow: "6px 6px 10px rgba(0, 0, 0, 0.7)" }}
            >
              {"    "}दातव्यमिति यद्दानं दीयतेऽनुपकारिणे ।
              <br />
              देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ॥
            </p>
          </div>
          <div className="flex justify-center items-center py-4">
            <p
              className={`font-bold text-[28px] text-center max-[500px]:text-[20px] text-white ${playfair.className} px-40 max-md:px-8 bg-black bg-opacity-20 p-4 rounded-lg`}
              style={{ textShadow: "6px 6px 10px rgba(0, 0, 0, 0.8)" }}
            >
              Charity given out of duty, without expectation of return, at the
              proper time and place, and to a worthy person is considered to be
              in the mode of goodness.
            </p>
          </div>
          <button
            className={`bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-lg drop-shadow-xl ${playfair.className} transition-transform hover:scale-105`}
            onClick={() => handleScrollToPaymentSection()}
          >
            Donate Now{" "}
          </button>
        </div>
      </div>

      <div className=" relative bg-[url('/Donation/AnnaDaan/Wave.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <AnnaDaanDiscription />
    </div>
  );
};

export default MainPoster;
