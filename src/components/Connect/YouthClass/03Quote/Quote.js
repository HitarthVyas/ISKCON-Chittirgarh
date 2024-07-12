"use client";

import { Metal, Quintessential, Tenali_Ramakrishna } from "next/font/google";

const tenali = Tenali_Ramakrishna({
  subsets: ["latin"],
  weight: ["400"],
});

const quint = Metal({
  subsets: ["latin"],
  weight: ["400"],
});

const Quote = () => {
  return (
    <section
      className=" bg-fixed bg-cover"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2019/08/23/18/24/lake-4426212_1280.jpg')",
      }}
    >
      <div className=" bg-black/65 p-5">
        <div className="border border-gray-400 text-white m-auto pt-10 pb-5 md:w-11/12 max-w-screen-2xl lg:px-24 md:px-10 px-5 sm:text-3xl text-2xl text-justify">
          <div className="flex w-[95%] m-auto">
            <img
              src="/Icons/Program/quote.svg"
              className="sm:block hidden h-8 mr-2 -mt-4"
            />
            <p className={`${tenali.className}`}>
              You are the young generation; you are the flower of your country
              and society. Practice this most sublime system, Krsna
              consciousness. Be happy and make others happy. This is the real
              mission of life.
            </p>
          </div>
          <h3
            className={`mt-4 sm:text-[#e1dfea] text-[#ffc06e] sm:text-4xl text-3xl text-right ${quint.className}`}
          >
            ~ Srila Prabhupada
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Quote;
