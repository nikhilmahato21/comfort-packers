import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import MobileBar from './components/MobileBar';
import WhatsAppFloat from './components/WhatsAppFloat';

import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import About from './sections/About';
import Services from './sections/Services';
import Routes from './sections/Routes';
import CoverageList from './sections/CoverageList';
import Gallery from './sections/Gallery';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import KeywordsBlock from './sections/KeywordsBlock';
import EnquirySection from './sections/EnquirySection';
import Footer from './sections/Footer';

import ServiceDetailPage from './pages/ServiceDetailPage';
import RouteDetailPage from './pages/RouteDetailPage';
import LocalityDetailPage from './pages/LocalityDetailPage';

function parsePath() {
  const path = window.location.pathname;
  if (path.startsWith('/services/')) return { type: 'service',  slug: path.replace('/services/', '').replace(/\/$/, '') };
  if (path.startsWith('/routes/'))   return { type: 'route',    slug: path.replace('/routes/', '').replace(/\/$/, '') };
  if (path.startsWith('/area/'))     return { type: 'locality', slug: path.replace('/area/', '').replace(/\/$/, '') };
  return { type: 'home' };
}

export default function App() {
  const [page, setPage] = useState(parsePath);

  const navigate = useCallback((type, slug) => {
    const path = type === 'home' ? '/' : type === 'locality' ? `/area/${slug}` : `/${type}s/${slug}`;
    window.history.pushState({}, '', path);
    setPage(type === 'home' ? { type: 'home' } : { type, slug });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const goHome = useCallback(() => navigate('home'), [navigate]);

  useEffect(() => {
    const handlePop = () => setPage(parsePath());
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  if (page.type === 'service') {
    return (
      <>
        <ServiceDetailPage slug={page.slug} onBack={goHome} onNavigate={navigate} />
        <WhatsAppFloat />
      </>
    );
  }

  if (page.type === 'route') {
    return (
      <>
        <RouteDetailPage slug={page.slug} onBack={goHome} onNavigate={navigate} />
        <WhatsAppFloat />
      </>
    );
  }

  if (page.type === 'locality') {
    return (
      <>
        <LocalityDetailPage slug={page.slug} onBack={goHome} onNavigate={navigate} />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services onNavigate={navigate} />
        <Routes onNavigate={navigate} />
        <CoverageList onNavigate={navigate} />
        <Gallery />
        <Process />
        <Testimonials />
        <FAQ />
        <KeywordsBlock />
        <EnquirySection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBar />
      <div className="h-16 lg:hidden" />
    </div>
  );
}
