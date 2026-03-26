import { Input } from './ui/input';
import { Button } from './ui/button';

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions? Reach out to us and our team will get back to you shortly.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-brand-dark">Address</p>
                <p className="text-gray-600">Keesara, Medchal-Malkajgiri, Telangana 501301</p>
              </div>
              <div>
                <p className="font-semibold text-brand-dark">Email</p>
                <p className="text-gray-600">info@mnmfacilitech.com</p>
              </div>
              <div>
                <p className="font-semibold text-brand-dark">Phone</p>
                <p className="text-gray-600">+91 90000 00000</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full"
              />
              <Input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full"
              />
              <Input
                as="textarea"
                placeholder="Your Message"
                rows={4}
                className="w-full"
              />
              <Button className="w-full bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    }
  );
}
