import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Accessories() {
  const accessories = [
    {
      title: "Car Batteries",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Engine Oils & Fluids",
      image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-2",
    },
    {
      title: "Performance Brake Pads",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Premium Wiper Blades",
      image: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Car Care & Cleaning",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
  ];

  return (
    <section id="accessories" className="py-24 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">
              Essential <span className="text-[#e11d48]">Accessories</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Complete your setup with our range of high-quality automotive accessories designed for longevity and style.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#shop"
            className="inline-flex items-center text-sm font-medium text-black uppercase tracking-wider hover:text-[#e11d48] transition-colors"
          >
            View All Accessories
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-gray-50 border border-gray-200 rounded-2xl ${item.colSpan}`}
            >
              <div className="aspect-square md:aspect-auto md:h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Content overlay */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-heading mb-2 text-white">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <button className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-[#e11d48] hover:text-white transition-colors ml-auto">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
