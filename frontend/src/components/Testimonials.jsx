import { Star } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVision Pvt Ltd',
    content: 'MNM Facilitech transformed our IT infrastructure. Their professional approach and timely delivery exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, GreenLeaf Corp',
    content: 'Outstanding facility management services. The team is highly responsive and maintains excellent standards.',
    rating: 5,
  },
  {
    name: 'Arun Reddy',
    role: 'Managing Director, DataFlow Systems',
    content: 'Their HR and payroll solutions have streamlined our entire workforce management. Highly recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-dark text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Trusted by businesses across industries for delivering excellence consistently.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{t.content}"</p>
              <div>
                <p className="font-semibold text-brand-dark">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
