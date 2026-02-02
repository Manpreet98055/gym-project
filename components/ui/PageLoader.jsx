'use client'
import { motion } from 'framer-motion';

export default function PageLoader() {
  const spinVariants = {
    animate: { rotate: 360, transition: { duration: 1, repeat: Infinity, ease: 'linear' } }
  };

  const containerVariants = {
    animate: { opacity: 1, transition: { duration: 0.3 } },
    initial: { opacity: 0 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/30 flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
        variants={spinVariants}
        animate="animate"
      />
    </motion.div>
  );
}
