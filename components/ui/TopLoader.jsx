'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopLoader({ loading }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (loading) {
      setWidth(30);
      const timer = setTimeout(() => setWidth(80), 300);
      return () => clearTimeout(timer);
    } else {
      setWidth(100);
      const reset = setTimeout(() => setWidth(0), 300);
      return () => clearTimeout(reset);
    }
  }, [loading]);

  if (!loading && width === 0) return null;

  return (
    <AnimatePresence>
      {(loading || width > 0) && (
        <motion.div
          className="fixed top-0 left-0 w-full h-[3px] z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-[#1A1363]"
            animate={{ width: `${width}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
