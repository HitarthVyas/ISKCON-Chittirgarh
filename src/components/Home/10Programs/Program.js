"use client";

import { Permanent_Marker } from "next/font/google";
import Link from "next/link";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Program = () => {
  return (
    <section className="py-10 px-5 bg-[#e1dfea]">
      <h1
        className={`text-center mb-10 ${marker.className} text-5xl text-[#e75e16]`}
      >
        Our Activities
      </h1>
      <div className="flex gap-10 justify-center flex-wrap">
        <div
          className={`w-72 p-2 bg-white rounded-2xl hover:shadow hover:scale-105 transition-all duration-300`}
        >
          <img
            src="/Images/Program/sbbg.jpg"
            className="h-44 w-full object-cover rounded-t-2xl"
            alt="Donation Banner"
          />
          <h5 className="p-2 pb-0 text-center text-[#3c3e63]">
            Shrimad Bhagwatam
          </h5>
          <Link href={'/bhagwatam'} className="p-2 hover:no-underline">
            <button className="bg-[#ca0b18] hover:bg-white hover:text-[#ca0b18] hover:border-[#ca0b18] border-2 font-medium text-[#ffffff] text-sm py-1 px-4 rounded-full overflow-hidden flex items-center gap-1 m-auto">
              <span>Explore</span>
            </button>
          </Link>
        </div>
        <div
          className={`w-72 p-2 bg-white rounded-2xl hover:shadow hover:scale-105 transition-all duration-300`}
        >
          <img
            src="/Images/Program/homesatsangbg.jpg"
            className="h-44 w-full object-cover rounded-t-2xl"
            alt="Donation Banner"
          />
          <h5 className="p-2 pb-0 text-center text-[#3c3e63]">Home Satsang</h5>
          <Link href={'home-satsang'} className="p-2 hover:no-underline">
            <button className="bg-[#ca0b18] hover:bg-white hover:text-[#ca0b18] hover:border-[#ca0b18] border-2 font-medium text-[#ffffff] text-sm py-1 px-4 rounded-full overflow-hidden flex items-center gap-1 m-auto">
              <span>Explore</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Program;
