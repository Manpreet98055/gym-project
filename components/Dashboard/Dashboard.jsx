'use client'
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <motion.div
      className="p-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold mb-4" variants={titleVariants}>
        Admin Dashboard
      </motion.h1>

      <motion.p className="text-gray-600" variants={subtitleVariants}>
        Welcome to Stamina Gym Admin Panel
      </motion.p>
    </motion.div>
  );
};

export default Dashboard;
