import { motion } from "motion/react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0f0f0f] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 md:w-64 md:h-64"
      >
        {/* Outer Tyre SVG with continuous rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl text-[#181818] fill-current">
            <circle cx="100" cy="100" r="95" stroke="#333" strokeWidth="10" fill="none" />
            <circle cx="100" cy="100" r="85" stroke="#222" strokeWidth="5" fill="none" />
            {/* Tread patterns */}
            {[...Array(24)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 15} 100 100)`}>
                <path d="M 100 5 L 105 15 L 95 15 Z" fill="#222" />
                <rect x="98" y="15" width="4" height="10" fill="#111" />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Inner Rim SVG - spins fast */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-3/5 h-3/5 text-gray-300 fill-current drop-shadow-lg">
            <circle cx="50" cy="50" r="45" fill="#2a2a2a" stroke="#444" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="#111" />
            {/* Spokes */}
            {[...Array(5)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 72} 50 50)`}>
                <path d="M 50 10 L 53 40 L 47 40 Z" fill="#444" />
                <path d="M 50 10 L 51 40 L 49 40 Z" fill="#666" />
              </g>
            ))}
            {/* Center cap */}
            <circle cx="50" cy="50" r="6" fill="#e11d48" />
          </svg>
        </motion.div>
        
        {/* Floor shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/80 blur-xl rounded-[100%]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 flex flex-col items-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          className="overflow-hidden whitespace-nowrap border-r-4 border-[#e11d48] pr-2"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-logo text-[#e11d48] tracking-widest uppercase flex items-center">
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
        <p className="text-gray-500 mt-4 text-sm tracking-widest animate-pulse">LOADING...</p>
      </motion.div>
    </div>
  );
}
