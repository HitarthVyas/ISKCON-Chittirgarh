"use client";

import { Yatra_One } from "next/font/google";

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
})

const Contact = () => {
  return (
    <section className="bg-[#171056] text-white text-center py-14 pt-16 px-5">
      <h2
        className={`font-medium ${yatra.className} text-4xl sm:text-5xl`}
        id="contact"
      >
        CONTACT US: 9772203474
      </h2>
    </section>
  );
};

export default Contact;
