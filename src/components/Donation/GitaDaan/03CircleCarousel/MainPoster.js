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
            src="/Donation/GitaDaan/img1.jpeg"
            alt="many clothes and pictures"
          />
          <img
            src="/Donation/GitaDaan/img2.jpeg"
            alt="someone preparing artisanal coffee"
          />
          <img src="/Donation/GitaDaan/img3.jpeg" alt="some tee" />
          <img
            src="/Donation/GitaDaan/img4.jpeg"
            alt="an empty table in a restaurant"
          />
          <img
            src="/Donation/GitaDaan/img5.jpeg"
            alt="a laptop with a notebook"
          />
          <img
            src="/Donation/GitaDaan/img6.jpeg"
            alt="a laptop and many books around it"
          />
        </div>
      </div>
    </>
  );
};

export default MainPoster;
