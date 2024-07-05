"use client"

import Intro from "@/components/Program/HomeSatsang/02Intro/Intro"
import Activities from "@/components/Program/HomeSatsang/03Activities/Activities"
import Contact from "@/components/Program/HomeSatsang/04Contact/Contact"

const page = () => {
  return (
    <section>
      <Intro />
      <Activities />
      <Contact />
    </section>
  )
}

export default page