'use client'
import React from 'react'
import { Merriweather_Sans, Montserrat } from "next/font/google";

const mons = Montserrat({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const textData = [
  { category: "Account No:", content: "09871450000385" },
  { category: "Account Name:", content: "ISKCON JAIPUR" },
  { category: "IFSC:", content: "HDFC0000987" },
];

const handleCopy = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied!", text);
      alert("Text copied!");
    })
    .catch((error) => {
      console.error("Error copying text:", error);
    });
};

const PaymentSection = () => {
  return (
    <div
    id="paymentSection"
    className="relative md:mx-16 sm:mx-9 mx-[10px] flex flex-col lg:flex-row py-[20px] rounded-lg pt-10 mt-5"
    style={{
      boxShadow: "29px 29px 60px 0px rgba(0, 0, 0, 0.4)",
      background: "#c31432", /* fallback for old browsers */
      background: "-webkit-linear-gradient(to right, #240b36, #c31432)", /* Chrome 10-25, Safari 5.1-6 */
      background: "linear-gradient(to right, #240b36, #c31432)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }}
    >
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 pb-[20px]">
        <div className="flex">
          <p
            className={`text-[24px] text-center font-bold text-[#FCD6A0] ${mons.className} p-[20px]`}
          >
            SCAN & PAY with any UPI App
          </p>
        </div>
        <div className="flex justify-center items-center w-6/12 md:w-[304px] md:h-[257px]">
          <img src="/Festivels/snanyatra/Screenshot.png" alt="UPI QR Code"></img>
        </div>
      </div>

      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="flex">
          <p
            className={`text-[24px] text-center font-bold text-[#FCD6A0] ${mons.className} p-[20px]`}
          >
            Direct Bank NEFT/RTGS/IMPS
          </p>
        </div>

        <div>
          {textData.map((text, index) => (
            <div
              className="flex flex-col sm:flex-row justify-center items-center flex-wrap p-[5px]"
              key={index}
            >
              <div className="flex flex-wrap items-center pt-[15px]">
                <div>
                  <p className={`text-[#4CAF50] text-[16px] font-bold ${merry.className}`}>
                    {text.category}
                  </p>
                </div>
                <div>
                  <p className={`text-white text-[16px] font-bold ${merry.className}`}>
                    <b>{text.content}</b>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <button
                  className="transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 duration-300 p-[5px] mx-[10px] rounded-md"
                  onClick={() => handleCopy(text.content)}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentSection