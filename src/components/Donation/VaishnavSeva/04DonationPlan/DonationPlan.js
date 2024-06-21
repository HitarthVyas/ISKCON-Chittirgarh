"use client";
import React from "react";
import { motion } from "framer-motion";
import { Barlow ,Architects_Daughter } from "next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ChoiceDonation from "@/components/Festivals/RathYatra/05ChoiceDonation/ChoiceDonation";
import PaymentSection from "@/components/Festivals/SnanYatra/05PaymentSection/PaymentSection";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Architects = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

const item = [
  {
    id: "1",
    number: "Donate 251 Meals",
    Price: "₹ 6,275",
    content:  "~ Do your part and contribute this amount.",
  },
  {
    id: "2",
    number: "Donate 501 Meals",
    Price: "₹ 12,275",
    content:  "~ Do your part and contribute this amount.",
  },
  {
    id: "3",
    number: "Donate 1001 Meals",
    Price: "₹ 25,025",
    content:  "~ Do your part and contribute this amount.",
  },
  {
    id: "4",
    title: "General Donation",
    Price: "Any No. of Meals ~ You want to Donate.",
  },
];

const donationOptions = [
  {
    meals: 21,
    amount: "₹ 525",
    content: "Do your part and contribute this to serve the Needy.",
  },
  {
    meals: 51,
    amount: "₹ 1,272",
    content: "Help us to feed the Needy, do you part by donation.",
  },
  {
    meals: 101,
    amount: "₹ 2,525",
    content: "Provide the Food to 101 Needy People. Support us.",
  },
  {
    meals: 151,
    amount: "₹ 3,775",
    content: "You can help us to feed the hungry. Support us.",
  },
];

const DonationPlan = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      {/* card */}
      <div className="flex flex-col items-center mx-40 my-20">
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {donationOptions.map((option, index) => (
            <motion.div
              key={index}
              className="flex-1 min-w-[250px] p-4 h-72 rounded-lg bg-[#d94f44]"
              whileHover={{ scale: 1.05 }} // Add scale animation on hover
              transition={{ duration: 0.3 }} // Add transition duration for smooth animation
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="px-2">
                <h2 className="font-bold mb-2 text-center ">
                  <span className="text-[23px] block mb-4 text-[#FFD700]">
                    Donate {option.meals} Meal
                  </span>
                  <span className= {`${Architects.className} text-[20px] text-[#ffffff]`}> {option.content}</span>
                </h2>
                <p className="text-center ">
                  <span className="text-[28px] font-bold text-[#FFD700]">
                    {option.amount}
                  </span>
                </p>
                <div className="mt-5 flex justify-center items-center ">
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

      {/* donation section start */}
      <div className="bg-[url('/Donation/NityaSeva/NITYA_SEWA.jpg')] bg-cover bg-center w-full relative">
        <div
         
        >
          <div className="flex flex-col items-center mb-[40px]">
            {item.map((item) => (
              <React.Fragment key={item.id}>
                <div className="flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1">
                  <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-1/2">
                    <div className="pb-[1px]">
                      <span
                        className={`text-[34px] text-start max-sm:text-center font-light md:font-medium text-white ${bar.className}`}
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        <h2>{item.id === "4" ? item.title : item.number}</h2>
                      </span>
                    </div>
                    <div className="flex sm:text-left text-center">
                      <span
                        className={`text-[18px] font-bold text-white ${bar.className}`}
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        <span className="text-[#FFD700] text-[24px]">{item.Price}</span> {item.content}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <button
                      className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
                <div className="border-b-[2px] w-3/4 border-white/50"></div>
              </React.Fragment>
            ))}
          </div>

          {/* paymentsection */}
          <div className="w-full" id="paymentSection "></div>
          <div className="mx-[60px] max-sm:mx-[2px] flex flex-col pb-20">
            <PaymentSection />
          </div>
        </div>
      </div>

      {/* donation section end */}
    </>
  );
};

export default DonationPlan;
