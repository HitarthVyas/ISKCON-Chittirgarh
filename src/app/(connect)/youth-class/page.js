"use client"

import Hero from "@/components/Connect/YouthClass/01Hero/Hero"
import Offer from "@/components/Connect/YouthClass/02Offer/Offer"
import Quote from "@/components/Connect/YouthClass/03Quote/Quote"
import Objectives from "@/components/Connect/YouthClass/04Objectives/Objectives"
import Activities from "@/components/Connect/YouthClass/05Activities/Activities"
import Contact from "@/components/Connect/YouthClass/06Contact/Contact"

const page = () => {
  return (
    <main>
      <Hero />
      <Offer />
      <Quote />
      <Objectives />
      <Activities />
      <Contact />
    </main>
  )
}

export default page