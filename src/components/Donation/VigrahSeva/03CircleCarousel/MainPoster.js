"use client";
import React from "react";
import styles from "./MainPoster.module.css";
import { Barlow } from "next/font/google";

const bar = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainPoster = () => {
  return (
    <>
      <div className={styles.mainPosterWrapper}>
        <div className={styles.gallery}>
          <img
            src="/Donation/VigrahSeva/img1.jpg"
            alt="many clothes and pictures"
          />
          <img
            src="/Festivels/snanyatra/Screenshot(29).png"
            alt="someone preparing artisanal coffee"
          />
          <img src="/Festivels/snanyatra/Screenshot(30).png" alt="some tee" />
          <img
            src="/Festivels/snanyatra/manglapuja.jpg"
            alt="an empty table in a restaurant"
          />
          <img
            src="/Festivels/snanyatra/abhishek.jpg"
            alt="a laptop with a notebook"
          />
          <img
            src="/Festivels/snanyatra/dress.jpg"
            alt="a laptop and many books around it"
          />
        </div>
      </div>
    </>
  );
};

export default MainPoster;
