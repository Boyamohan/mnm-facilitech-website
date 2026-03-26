import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-brand-primary via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
            Empowering Your Business with
            <span className="text-brand-primary block">Smart Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MNM Facilitech Private Limited delivers end-to-end solutions for modern enterprises,
            combining cutting-edge technology with expert management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold px-8 py-3 text-lg inline-flex items-center justify-center">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
    }
  );
}
