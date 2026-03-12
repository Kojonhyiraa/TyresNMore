import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600706432502-77a0e2e32729?q=80&w=2070&auto=format&fit=crop"
          alt="Automotive Background"
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-white leading-tight">
            Need New Tyres? <br />
            <span className="text-[#e11d48]">We've Got You Covered.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get expert advice, premium products, and professional installation. Reach out today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-[#e11d48] hover:bg-[#be123c] transition-colors uppercase tracking-wider rounded-xl"
            >
              <MessageCircle className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Contact on WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+1234567890"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white border border-white/20 hover:bg-white/10 transition-colors uppercase tracking-wider rounded-xl"
            >
              <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-[1px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#1a1a1a]"></path>
        </svg>
      </div>
    </section>
  );
}
