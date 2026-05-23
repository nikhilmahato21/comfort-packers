import Navbar from './components/Navbar';
import MobileBar from './components/MobileBar';
import WhatsAppFloat from './components/WhatsAppFloat';

import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import Routes from './sections/Routes';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import KeywordsBlock from './sections/KeywordsBlock';
import EnquirySection from './sections/EnquirySection';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Routes />
        <Process />
        <Testimonials />
        <FAQ />
        <KeywordsBlock />
        <EnquirySection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBar />
      {/* Spacer so mobile bar doesn't cover content */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
