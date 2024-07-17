import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Barlow } from "next/font/google";
import ChoiceDonation from "../../RathYatra/05ChoiceDonation/ChoiceDonation";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";
import SerialCarousel from "../04SerialCarousel/SerialCarousel";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DonationCard = () => {
  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardData = [
    {
      name: "Garland for Srimati Radha Rani",
      title: "7,000",
      image: "/Festivels/radhasthmi/img1.jpg",
    },
    {
      name: "Jewellery for Srimati Radha Rani",
      title: "15,000",
      image: "/Festivels/radhasthmi/img5.jpg",
    },
    {
      name: "Maha Abhishek",
      title: "40,000",
      image: "/Festivels/radhasthmi/img3.jpg",
    },
    {
      name: "56 Bhog Seva",
      title: "11,000",
      image: "/Festivels/radhasthmi/img4.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-8 p-8">
        <div className="text-center p-2">
        <span
        className={`text-[#ffffff] text-[28px] font-bold ${bar.className} tracking-widest`}
      >
        Donation Seva
      </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {cardData.map((person, index) => (
            <motion.div
              key={index}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.9, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="w-80 h-[450px] bg-yellow-500">
                <CardHeader floated={false} className="h-[240px] overflow-hidden">
                  <motion.img
                    src={person.image}
                    alt="profile-picture"
                    className="w-full h-full object-top object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                </CardHeader>
                <CardBody className="text-center h-[120px] flex flex-col justify-center">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 text-[24px] font-bold text-blue-800"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    {person.name}
                  </Typography>
                  <Typography color="blue-gray" className=" font-bold text-[20px] text-black-900">
                    {person.title}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      color="blue"
                      onClick={() => handleScrollToPaymentSection()}
                    >
                      Donate Now
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full mt-20">
        <ChoiceDonation />
      </div>
      <SerialCarousel />
      <div className="mx-[60px] max-sm:mx-[2px] flex flex-col pb-20">
        <PaymentSection />
      </div>
    </>
  );
};

export default DonationCard;
