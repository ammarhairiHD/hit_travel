import { div } from "motion/react-client";
import PakejUmrahHeroSection from "../components/pakej-umrah/Hero";
import Packages from "../components/pakej-umrah/Package";

export default function PakejUmrah() {
  return (
    <div>
      <PakejUmrahHeroSection />
      <Packages />
    </div>
  );
}
