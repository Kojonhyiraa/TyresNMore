import { motion } from "motion/react";

export default function BrandSlider() {
  const brands = [
    "TOYOTA",
    "HONDA",
    "BMW",
    "MERCEDES-BENZ",
    "NISSAN",
    "HYUNDAI",
    "KIA",
    "VOLKSWAGEN",
    "FORD",
    "AUDI",
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
          Tyres Available for All Major Car Brands
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="group/brand mx-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl font-bold font-heading tracking-widest text-black group-hover/brand:text-[#e11d48] transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
