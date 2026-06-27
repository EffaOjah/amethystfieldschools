import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import WhatWeOffer from '../components/WhatWeOffer'
import Statistics from '../components/Statistics'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Extracurriculars from '../components/Extracurriculars'
import LatestPost from '../components/LatestPost'
import ContactBanner from '../components/ContactBanner'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import MediaGallery from '../components/MediaGallery'

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="Amethyst Field Schools | modeling excellence | Calabar, Nigeria"
        description="Welcome to Amethyst Field Schools in Calabar, Nigeria. Established in September 2020, we offer exceptional care and foster academic excellence, emotional, and social balance."
        canonical="https://amethystfieldschools.com/"
      />
      <div className="bg-white text-on-surface font-body min-h-screen overflow-x-hidden">
        <TopNav />
        <main>
          <Hero />
          <Reveal delay={0.1}><WhatWeOffer /></Reveal>
          <Reveal delay={0.1}><Statistics /></Reveal>
          <Reveal delay={0.1} direction="left"><AboutUs /></Reveal>
          <Reveal delay={0.1}><Extracurriculars /></Reveal>
          <Reveal delay={0.1} direction="right"><MediaGallery /></Reveal>
          <Reveal delay={0.1} direction="left"><Testimonials /></Reveal>
          <Reveal delay={0.1}><LatestPost /></Reveal>
          <Reveal delay={0.1} direction="up"><ContactBanner /></Reveal>
          <Reveal delay={0.1}><CallToAction /></Reveal>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
