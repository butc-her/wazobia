import AboutHero from "@/components/AboutHero"
import Footer from "/components/Footer"
import Navigation from "/components/Navigation"
import HelpSection from "@/components/HelpSection"
import ThankYouCarousel from "@/components/ThankYouCarousel"
import PartnersSection from "@/components/PartnersSection"
import OurTeam from "@/components/OurTeam"
import HelpingHands from "@/components/HelpingHands"
import ProgramsSection from "@/components/ProgramsSection"
import AboutStatement from "@/components/AboutStatement"

const About = () => {
  return (
    <div>
        <Navigation />
        <AboutHero />
        <HelpingHands />
        <AboutStatement />
        <HelpSection />
        <ProgramsSection />
        <ThankYouCarousel />
        <PartnersSection />
        <OurTeam />
        <Footer />
    </div>
  )
}

export default About