import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import Counter from './components/Counter';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import { siteData } from './data/siteData';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <SectionHeader
          title={siteData.services.title}
          subtitle={siteData.services.subtitle}
        />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {siteData.services.items.map((service, i) => (
                <ServiceCard key={i} {...service} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Delivering excellence since our inception
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {siteData.stats.map((stat, i) => (
                <Counter key={i} {...stat} />
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
