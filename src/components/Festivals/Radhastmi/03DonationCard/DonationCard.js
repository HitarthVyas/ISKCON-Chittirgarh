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
import MainPoster from "../04CircleCarousel/MainPoster";
import PaymentSection from "../../SnanYatra/05PaymentSection/PaymentSection";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DonationcCard = () => {

  const handleScrollToPaymentSection = () => {
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const cardData = [
    {
      name: "Natalie Paisley",
      title: "CEO / Co-Founder",
      image: "https://docs.material-tailwind.com/img/team-3.jpg",
    },
    {
      name: "John Doe",
      title: "CTO",
      image: "https://docs.material-tailwind.com/img/team-2.jpg",
    },
    {
      name: "Jane Smith",
      title: "CFO",
      image: "https://docs.material-tailwind.com/img/team-1.jpg",
    },
    {
      name: "Mike Johnson",
      title: "COO",
      image: "https://docs.material-tailwind.com/img/team-4.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-8 p-8">
        <div className="text-center p-2">
          <h2
            className={`text-[32px] text-[#e82277] font-bold tracking-widest ${bar.className}`}
          >
            Donation Seva
          </h2>
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
              <Card className="w-80 bg-yellow-500">
                <CardHeader floated={false} className="h-74 overflow-hidden">
                  <motion.img
                    src={person.image}
                    alt="profile-picture"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {person.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {person.title}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button color="blue"  onClick={() => handleScrollToPaymentSection()} >Donate Now</Button>
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
      <MainPoster />
      <div className="mx-[60px] max-sm:mx-[2px] flex flex-col pb-20">
        <PaymentSection />
      </div>
    </>
  );
};

export default DonationcCard;
