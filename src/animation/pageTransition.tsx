import { motion, AnimatePresence } from "framer-motion";
import {type ReactNode, useState, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Loading 0.8 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
          >
            <span className="loading loading-dots loading-xl text-white"></span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};