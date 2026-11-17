import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Product";
import Reviews from "@/components/Reviews";
import TrustBar from "@/components/TrustBar";
import Wpp from "@/components/Wpp";
import Base from "@/templates/Base";

const Index = () => {
  return (
        <Base>
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <Reviews />
          <FAQ />
          <Location />
          <Wpp />
        </Base>
  );
} 

export default Index;