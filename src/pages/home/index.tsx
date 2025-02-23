import Layout from '../../components/layout'
import Hero from '../../sections/hero'
import About from '../../sections/about'
import Service from '../../sections/service'
import Contact from '../../sections/contact'
import Projects from '../../sections/projects'
import HeroSectionMarquee from '../../components/ui/HeroSectionMarquee'
import SkillsMarquee from '../../components/ui/SkillsMarquee'


const Home = () => {
    return (
        <Layout>
            <Hero />
            <HeroSectionMarquee />
            <About />
            <Service />
            <SkillsMarquee />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default Home