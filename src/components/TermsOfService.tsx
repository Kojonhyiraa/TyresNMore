import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center text-gray-400 hover:text-[#e11d48] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </motion.a>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using TyresNMore, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Products and Services</h2>
              <p>We reserve the right to modify or discontinue any product or service without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Accuracy of Information</h2>
              <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Warranties and Guarantees</h2>
              <p>All products sold are subject to their respective manufacturer's warranties. TyresNMore provides no additional warranties unless explicitly stated in writing. We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p>Questions about the Terms of Service should be sent to us at info@tyresnmore.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
