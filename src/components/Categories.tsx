import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "Premium Tyres",
      description: "High-performance tyres for all seasons and terrains.",
      image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Custom Rims",
      description: "Stylish alloy rims to elevate your vehicle's look.",
      image: "/car-rims.jpg",
    },
    {
      title: "Tyre Accessories",
      description: "Essential accessories for maintenance and care.",
      image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Wheel Alignment",
      description: "Precision alignment for a smoother, safer ride.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Wheel Balancing",
      description: "Eliminate vibrations with expert wheel balancing.",
      image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">
            Our <span className="text-[#e11d48]">Products & Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to keep your vehicle performing at its best, from premium tyres to expert alignment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-gray-200 overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-3 text-black group-hover:text-[#e11d48] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {category.description}
                </p>
                <a href="#shop" className="inline-flex items-center text-sm font-medium text-black uppercase tracking-wider group-hover:text-[#e11d48] transition-colors">
                  Shop (Coming Soon)
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
