import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import ExpansionOffers from './components/ExpansionOffers';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleCertificate from './components/GoogleCertificate';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [preloaderActive, setPreloaderActive] = useState(true);

  return (
    <>
      {/* Entrada de 5 segundos - Preloader */}
      <AnimatePresence mode="wait">
        {preloaderActive && (
          <Preloader onComplete={() => setPreloaderActive(false)} />
        )}
      </AnimatePresence>

      {/* Main landing page elements */}
      {!preloaderActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative min-h-screen bg-brand-blue-dark text-white selection:bg-brand-cyan selection:text-brand-blue-deep"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Partners />
            <Services />
            <ExpansionOffers />
            <WhyChooseUs />
            <GoogleCertificate />
            <Testimonials />
            <Gallery />
            <FAQ />
            <ContactForm />
          </main>
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </>
  );
}

