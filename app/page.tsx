import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import StickyHeader from "@/components/StickyHeader";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <ContactForm />
        
        <footer className="bg-[#2D2D2D] text-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-2xl font-light mb-4">Mori Living</div>
            <p className="text-gray-400 mb-6">
              Japanese-inspired interior design for Hong Kong homes
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
              <a href="tel:+85212345678" className="hover:text-white transition-colors">
                +852 1234 5678
              </a>
              <span className="hidden sm:block">·</span>
              <a href="mailto:hello@moriliving.com" className="hover:text-white transition-colors">
                hello@moriliving.com
              </a>
              <span className="hidden sm:block">·</span>
              <a href="https://wa.me/85212345678" className="hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-500">
              © 2024 Mori Living. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
