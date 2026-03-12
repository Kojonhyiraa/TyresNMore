import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-1"
          >
            <a href="#" className="text-3xl font-bold font-logo tracking-tighter mb-6 flex items-center text-[#e11d48]">
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
            </a>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm max-w-sm">
              Your trusted partner for premium tyres, stylish rims, and professional automotive services. We keep you moving safely and in style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d48] hover:border-[#e11d48]/50 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d48] hover:border-[#e11d48]/50 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d48] hover:border-[#e11d48]/50 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-heading mb-6 text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-4">
              <li><a href="#tyres" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">Premium Tyres</a></li>
              <li><a href="#rims" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">Custom Rims</a></li>
              <li><a href="#accessories" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">Tyre Accessories</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">Wheel Alignment</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">Wheel Balancing</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-heading mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#e11d48] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Automotive Boulevard,<br />
                  Motor City, MC 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#e11d48] mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#e11d48] mr-3 flex-shrink-0" />
                <a href="mailto:info@tyresnmore.com" className="text-gray-400 hover:text-[#e11d48] transition-colors text-sm">
                  info@tyresnmore.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} TyresNMore. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
