import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

export default function PrecisionEngineering() {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* Left: Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="font-heading text-3xl lg:text-5xl font-semibold tracking-tight mb-8">
              WHY CHOOSE <span className="text-[#e11d48]">OUR TYRES</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-rose-500 mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Rotational Stability</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Optimized tread patterns for maximum grip in both wet and dry conditions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="text-rose-500 mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Reinforced Sidewalls</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Enhanced durability to withstand rough road surfaces and impacts.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Leaf className="text-rose-500 mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Eco-Efficiency</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Low rolling resistance technology to improve your vehicle's fuel economy.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Spinning Tyre from Loader */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative group flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
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
              <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 md:h-12 bg-black/80 blur-xl md:blur-2xl rounded-[100%]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
