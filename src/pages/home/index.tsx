import React from "react"
import HeroSection from "./sections/hero"
import AboutSection from "./sections/about"
import ServiceSection from "./sections/service"
import ProjectsSection from "./sections/projects"
import ContactSection from "./sections/contact"
import HeroSectionMarquee from "@/components/ui/HeroSectionMarquee"
import SkillsMarquee from "@/components/ui/SkillsMarquee"


const Home = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <HeroSectionMarquee />
            <AboutSection />
            <ServiceSection />
            <SkillsMarquee />
            <ProjectsSection />
            <ContactSection />
        </React.Fragment>
    )
}

export default Home