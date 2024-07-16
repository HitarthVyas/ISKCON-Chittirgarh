import React from "react";
import "flowbite";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Caveat ,Barlow} from "next/font/google";
import { Carousel } from "flowbite";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";
import CarouselSlide from "../03CarouselSlide/CarouselSlide";

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
          <div className="flex flex-wrap justify-center mt-7 pb-10 px-[150px] max-[1100px]:px-[20px] max-[330px]:mx-2">
            {/* Rendering the first row */}
            {firstRow.map((item, index) => (
              <div
                key={item.id}
                className="shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-4 mb-6 w-full sm:w-1/2 md:w-1/3 flex-shrink-0 hover:scale-110 transition-transform duration-500"
              >
                <Image
                  className="rounded-t-lg"
                  src={item.img}
                  alt={item.Title}
                  width={imageSize.width}
                  height={imageSize.height}
                  layout="responsive"
                />
                <div className="p-5 flex flex-col items-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {item.Title}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {item.price}
                  </h5>
                  
                    <button
                      className={`bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-lg drop-shadow-xl ${playfair.className} transition-transform hover:scale-105`}
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now
                    </button>
                </div>
              </div>
            ))}
          </div>
          {/* donate your choice section  */}
          <div className="flex justify-center items-center mb-20 mt-8 mx-80 max-[1000px]:mx-[20px]">
            <div
              className="basis-3/5 max-2xl:basis-full  flex flex-col lg:flex-row p-5 lg:p-10 flex-wrap"
              style={{ boxShadow: "29px 29px 60px 0px rgba(0, 0, 0, 0.4)" }}
            >
              <div className="basis-3/5 ">
                <div className=" flex flex-col">
                  <div className="pb-5 text-center sm:text-left">
                    <h1
                      className={`font-bold text-[#2b2859] text-[28px] ${playfair.className}`}
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
                    padding: "20px 30px",
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

          <CarouselSlide />
          <div className="w-full h-16" id="paymentSection"></div>
          <div className=" mx-[60px] max-sm:mx-[2px] flex flex-col mb-20">
            <PaymentSection />
          </div>
        </div>
      </div>
  )
}

export default DonationSection