"use client";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="p-10 bg-[#171056] text-white" id="contact">
      <h1 className="text-center font-medium">Contact Us</h1>
      <div className="flex flex-col md:flex-row py-5">
        <div className="md:w-1/2 text-center">
          <h4 className="font-semibold">Contact Number:</h4>
          <div className="mt-5">
            <h5 className="pb-2">Offline Classes:</h5>
            <p className="text-base font-bold mb-0">
              <span>Ghanshyam Dev Prji: </span>
              <span>+91 7296928767</span>
            </p>
          </div>
          <div className="mt-7">
            <h5 className="pb-2">Online Classes:</h5>
            <p className="text-base font-bold mb-0">
              <span>Hitakara Vamana Das: </span>
              <span>+91 7412879735</span>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 pt-16 md:pt-0 flex flex-col justify-center items-center">
          <h2 className={`text-center pb-8 font-medium text-4xl`}>Community</h2>
          <div className="flex justify-center items-center gap-4 md:gap-20">
            <Link
              href="https://www.instagram.com/iskcon_chittorgarh?igsh=ZnpiMHF6bnVwcW5s&utm_source=qr "
              target="_blank"
            >
              <img
                src="/Icons/Media/instagram.svg"
                className="h-10 sm:h-12"
              />
            </Link>
            <Link href="https://wa.me/7296928767" target="_blank">
              <img
                src="/Icons/Media/whatsapp.svg"
                className="h-10 sm:h-12"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
