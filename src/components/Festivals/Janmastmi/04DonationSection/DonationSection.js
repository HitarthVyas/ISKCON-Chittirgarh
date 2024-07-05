"use client";
import { Autour_One } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import ChoiceDonation from "../../RathYatra/05ChoiceDonation/ChoiceDonation";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";
import SerialCarousel from "../03SerialCarousel/SerialCarousel";


const autho = Autour_One({
  subsets: ["latin"],
  weight: ["400"],
});

const donationOptions = [
  { meals: 500, amount: "₹ 10,000" },
  { meals: 250, amount: "₹ 5,000" },
  { meals: 100, amount: "₹ 2,000" },
  { meals: 50, amount: "₹ 1,000" },
];

const DonationSection = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-[600px] w-full text-center ">
          <h2
            className={`text-[37px] font-bold leading-tight max-sm:text-[20px] p-2 m-0 ${autho.className}`}
          >
            Sri Krishna Janmashtami
          </h2>
        </div>
        <div className="max-w-[700px] w-full text-center">
          <h2
            className={`text-[37px] font-bold mb-1 max-sm:text-[20px] mt-[-10px] ${autho.className}`}
          >
            Maha-Daan
          </h2>
          <h2
            className={`text-[25px] font-extrabold
         mb-2 max-sm:text-[25px] m-0 ${autho.className}`}
          >
            ISKCON FOOD DONATION
          </h2>
          <p
            className={`text-[20px] max-md:text-[25px] m-0 font-medium ${autho.className}`}
          >
            Help us to eradicate hunger. Join Food for Life campaign.
          </p>
        </div>
      </div>

      {/* <card > */}
      <div className="flex flex-col items-center mx-40 my-20">
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {donationOptions.map((option, index) => (
            <motion.div
              key={index}
              className="flex-1 min-w-[250px] p-4 h-64 rounded-lg bg-[#d94f44]"
              style={{ boxShadow: "29px 29px 60px 0px rgba(0, 0, 0, 0.1)" }}
              whileHover={{ scale: 1.05 }} // Add scale animation on hover
              transition={{ duration: 0.3 }} // Add transition duration for smooth animation
            >
              <div className="px-2">
                <h2 className="text-[23px]  md:text-3xl font-bold mb-2 text-center text-white">
                  <span>Donate {option.meals}</span>
                  <br />
                  <span>Meal</span>
                </h2>
                <p className="text-center ">
                  <span className="text-[28px] font-bold text-white">
                    {option.amount}
                  </span>
                </p>
                <div className="mt-5 flex justify-center items-center">
                  <button
                    type="button"
                    className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleScrollToPaymentSection()}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ChoiceDonation />
      <SerialCarousel />
      <div className="w-full" id="paymentSection "></div>
      <div className="mx-[60px] max-sm:mx-[2px] flex flex-col pb-20">
        <PaymentSection />
      </div>
    </>
  );
};

export default DonationSection;
