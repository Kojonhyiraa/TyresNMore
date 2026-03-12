/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandSlider from "./components/BrandSlider";
import Categories from "./components/Categories";
import PrecisionEngineering from "./components/PrecisionEngineering";
import Accessories from "./components/Accessories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import TermsOfService from "./components/TermsOfService";
import Shop from "./components/Shop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    // Reduced loading time so it acts as a quick splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      
      // Allow the DOM to update if we are switching pages, then scroll
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        if (id === "shop" || id === "terms" || !id) {
          // Instantly scroll to top for full pages
          window.scrollTo({ top: 0, behavior: "instant" });
        } else {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 50);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#e11d48] selection:text-white overflow-x-hidden w-full">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Navbar />
            <main>
              {currentPath === "#terms" ? (
                <TermsOfService />
              ) : currentPath === "#shop" ? (
                <Shop />
              ) : (
                <>
                  <Hero />
                  <BrandSlider />
                  <Categories />
                  <PrecisionEngineering />
                  <Accessories />
                  <CTA />
                </>
              )}
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
