import Hero from "@/components/Hero";
import Instead from "@/components/Instead";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Instead />
      <Services />
      <Timeline />
      <Testimonials />
      <ContactForm />
      
      <footer className="bg-forest text-warm-paper py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-display text-3xl mb-4">Mori Living</h3>
              <p className="text-pale-stone breathing">
                Japanese-inspired interior design for compact Hong Kong homes.
                One designer, start to finish.
              </p>
            </div>
            <div className="space-y-3 text-pale-stone">
              <div>
                <a href="tel:+85212345678" className="hover:text-aged-brass transition-colors">
                  +852 1234 5678
                </a>
              </div>
              <div>
                <a href="mailto:hello@moriliving.com" className="hover:text-aged-brass transition-colors">
                  hello@moriliving.com
                </a>
              </div>
              <div>
                <a href="https://wa.me/85212345678" className="hover:text-aged-brass transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-aged-brass/30 pt-8 text-sm text-pale-stone/70">
            <p>© 2024 Mori Living. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
