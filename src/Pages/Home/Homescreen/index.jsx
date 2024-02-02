import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../Portfolio";
import Testimonial from "../Testimonails";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
    return (
      <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial />
        <ContactMe />
        <Footer />
        
      </>
    );
  }
