'use client'
import React from 'react'
import { Playfair_Display, Caveat ,Barlow} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"], 
});

const ChoiceDonation = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="flex justify-center items-center mb-20 mt-8 mx-8">
    <div
      className="basis-3/5 max-2xl:basis-full  flex flex-col lg:flex-row p-5 lg:p-10 flex-wrap"
      style={{ boxShadow: "29px 29px 60px 0px rgba(0, 0, 0, 0.4)" }}
    >
      <div className="basis-3/5 ">
        <div className=" flex flex-col">
          <div className="pb-5 text-center sm:text-left">
            <h1
              className={`font-bold text-[#2b2859] text-[36px] ${playfair.className}`}
            >
              Donate Your choice
            </h1>
          </div>
          <div>
            <p
              className={`font-medium text-[20px] text-justify ${playfair.className}`}
            >
              Of all types of services, service of Lord Krishna is best,
              and better than the worship of Lord Viṣṇu is the service
              of His devotee, the Vaiṣṇava.
            </p>
          </div>
        </div>
      </div>
      <div className="basis-2/5  flex justify-center items-center mt-5 lg:mt-0">
        <button
        onClick={() => handleScrollToPaymentSection()}
          className={`${playfair.className}`}
          style={{
            background: "#0c82f2",
            color: "white",
            padding: "21px 55px",
            fontSize: "15px",
            cursor: "pointer",
            borderRadius: "10px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "600",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#09b2a0";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0c82f2";
            e.target.style.color = "white"; // Reset text color when not hovered
          }}
        >
          Donate Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default ChoiceDonation