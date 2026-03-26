import { Button } from './ui/button';

export default function CTASection() {
  return (
    <section className="py-16 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Partner with MNM Facilitech Private Limited for reliable, efficient,
          and tailored solutions that drive your business forward.
        </p>
        <Button
          variant="secondary"
          className="bg-white text-brand-primary hover:bg-blue-50 font-semibold px-8 py-3"
        >
          Get Started Today
        </Button>
      </div>
    </section>
    }
  );
}
