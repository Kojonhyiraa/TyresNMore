import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function Shop() {
  return (
    <div id="shop" className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e11d48]/10 rounded-full blur-[100px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl flex flex-col items-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          className="overflow-hidden whitespace-nowrap border-r-4 border-[#e11d48] pr-2 mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-logo text-[#e11d48] tracking-widest uppercase flex items-center justify-center">
            TYRES
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              whileHover={{ scale: 1 }}
              className="text-white inline-block mx-[2px]"
            >
              N
            </motion.span>
            MORE
          </h2>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
          COMING <span className="text-[#e11d48]">SOON</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          We're working hard to bring you the ultimate online shopping experience for premium tyres, rims, and accessories. Stay tuned!
        </p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#home"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#e11d48] hover:bg-[#be123c] transition-colors uppercase tracking-wider rounded-lg"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}
