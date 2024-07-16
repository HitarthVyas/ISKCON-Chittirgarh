import React from "react";
import "flowbite";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Caveat ,Barlow} from "next/font/google";
import { Carousel } from "flowbite";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";
import CarouselSlide from "../03CarouselSlide/CarouselSlide";
import ChoiceDonation from "../../RathYatra/05ChoiceDonation/ChoiceDonation";
import Objectives from "../02Objectives/Objectives";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const caveat1 = Caveat({
  subsets: ["latin"],
});

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400","500","600","700","800","900"],
});


const feed = [
  {
    id: "1",
    img: "/Festivels/snanyatra/rajbhog.jpg",
    Title: "Chappan Bhoga Seva",
    price: "₹ 751",
  },
  {
    id: "2",
    img: "/Festivels/snanyatra/dress.jpg",
    Title: "Diety Dress",
    price: "₹ 1101",
  },
  {
    id: "3",
    img: "/Festivels/snanyatra/abhishek.jpg",
    Title: "Abhishekam",
    price: "₹ 1101",
  },
];

const DonationSection = () => {
  const imageSize = { width: 800, height: 1000 }; // Set width and height to match the "Gau Seva" image
  const firstRow = feed.slice(0, 3); // First three items for the first row

  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-5">
        <div className="relative">
          <div className="mx-3 text-center  p-2">
            <h2 className={`text-[28px] text-[#e82277] font-bold tracking-widest ${bar.className}`}>Donation Seva</h2>
          </div>
          <div className="flex flex-wrap justify-center mt-7 pb-10 px-[10px] max-[1100px]:px-[20px] max-[330px]:mx-2">
           <Objectives />
          </div>

          {/* donate your choice section  */}
          <ChoiceDonation />
          <div className="w-full h-16" id="paymentSection"></div>
          <div className=" mx-[60px] max-sm:mx-[2px] flex flex-col mb-20">
            <PaymentSection />
          </div>
        </div>
      </div>
  )
}

export default DonationSection