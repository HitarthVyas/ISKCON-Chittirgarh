"use client"

import Hero from "@/components/About/SrilaPrabhupada/01Hero/Hero"
import Glorification from "@/components/About/SrilaPrabhupada/02Glorification/Glorification"
import Details from "@/components/About/SrilaPrabhupada/03Details/Details"
import Achievements from "@/components/About/SrilaPrabhupada/04Achievements/Achievements"
import Charity from "@/components/About/SrilaPrabhupada/05Charity/Charity"

const page = () => {
  return (
    <main>
      <Hero />
      <Glorification />
      <Details />
      <Achievements />
      <Charity />
    </main>
  )
}

export default page