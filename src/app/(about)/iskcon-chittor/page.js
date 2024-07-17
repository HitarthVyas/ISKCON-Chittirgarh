"use client"

import Banner from "@/components/About/IskconChittor/01Banner/Banner"
import Achieve from "@/components/About/IskconChittor/02Achieve/Achieve"
import Deities from "@/components/About/IskconChittor/03Deities/Deities"
import Purpose from "@/components/About/IskconChittor/03Purpose/Purpose"
import Activities from "@/components/About/IskconChittor/04Activities/Activities"

const page = () => {
  return (
    <main>
      <Banner />
      <Achieve />
      <Purpose />
      <Deities />
      <Activities />
    </main>
  )
}

export default page