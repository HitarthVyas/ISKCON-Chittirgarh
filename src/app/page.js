import Hero from "@/components/Home/01Hero/Hero";
import Festival from "@/components/Home/02Festivals/Festival";
import HomeData from "@/components/Home/03Counter/HomeData";
import HomeCalendar from "@/components/Home/04Calendar/Calendar";
import SrilaPrabhupada from "@/components/Home/05SrilaPrabhupada/SrilaPrabhupada";
import Darshan from "@/components/Home/06Darshan/Darshan";
import Schedule from "@/components/Home/07Schedule/Schedule";
import Donation from "@/components/Home/08Donation/Donation";
import Connect from "@/components/Home/09Connect/Connect";
import Program from "@/components/Home/10Programs/Program";

export default function Home() {
  return (
    <main>
      <Hero />
      <Festival />
      <HomeData />
      <HomeCalendar />
      <SrilaPrabhupada />
      <Darshan />
      <Schedule />
      <Donation />
      <Connect />
      <Program />
    </main>
  );
}
