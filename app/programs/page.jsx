import ProgramHero from "@/components/ProgramHero"
import Footer from "/components/Footer"
import Navigation from "/components/Navigation"
import HelpingHands from "@/components/HelpingHands"
import ProgramDescription from "@/components/ProgramDescription"
import HelpSection from "@/components/HelpSection"
import Section from "@/components/Section"

const Programs = () => {
  return (
    <div>
        <Navigation />
        <ProgramHero />
        <HelpingHands />
        <ProgramDescription />
        <HelpSection />
        <Section />
        <Footer />
    </div>
  )
}

export default Programs