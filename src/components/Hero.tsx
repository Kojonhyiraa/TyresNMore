import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  // Using the uploaded tyre image. 
  // Note: Please upload your image to the 'public' folder and name it 'hero-tyre.png'
  const heroTyre = "/hero-tyre.png";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1600706432502-77a0e2e32729?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Automotive Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 max-w-2xl text-center md:text-left pt-8 md:pt-0"
          >
            <h1 className="text-[11vw] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-4 sm:mb-6 text-white">
              Premium Tyres & Rims Built for <span className="text-[#e11d48]">Every Road</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 mb-6 lg:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              TyresNMore delivers high-quality tyres, stylish rims, and reliable accessories for all vehicle types. Performance meets luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-4 text-sm font-medium text-white bg-[#e11d48] hover:bg-[#be123c] transition-colors uppercase tracking-wider rounded-lg"
              >
                Browse Tyres
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-4 text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors uppercase tracking-wider rounded-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                <span>Contact on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right — spinning tyre */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative w-full md:w-1/2 flex items-center justify-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] -mt-6 md:mt-0"
          >
            <motion.img
              src={heroTyre}
              alt="Premium performance tyre and alloy rim"
              className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-lg object-contain drop-shadow-[0_0_60px_hsl(347,77%,50%,0.15)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow */}
            <div className="absolute inset-0 bg-[#e11d48]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
