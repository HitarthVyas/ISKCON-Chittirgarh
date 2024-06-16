"use client";
import { Playfair_Display,Barlow } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400","500","600","700","800","900"],
});

const MainPoster = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <>
      {/* poster section  */}
      <div
        className="relative h-[80vh] w-full bg-cover bg-center flex justify-center items-center "
        style={{
          backgroundImage: "url('/Festivels/snanyatra/snanyatrapic3.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center flex-col">
          <h1
            className={`text-white text-6xl md:text-7xl text-center mt-20 ${bar.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Snan Yatra
          </h1>
          <div style={{ marginTop: "20px" }}>
            <button
            onClick={() => handleScrollToPaymentSection()}
              style={{
                border: "2px solid yellow",
                background: "transparent",
                color: "white",
                padding: "10px 20px",
                fontSize: "24px",
                cursor: "pointer",
                borderRadius: "5px",
                borderRadius: "30px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e82277";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white"; // Reset text color when not hovered
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/Festivels/snanyatra/feat-shp.png')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>
    </>
  );
};

export default MainPoster;
