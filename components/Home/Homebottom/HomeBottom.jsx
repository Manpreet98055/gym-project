'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const HomeBottom = () => {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  const handleNewsletter = () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    const stored =
      JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    if (stored.includes(email)) {
      toast.error("Email already subscribed");
      return;
    }

    stored.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(stored));

    toast.success("Subscribed successfully 🎉");
    setEmail("");
  };

  const linkVariants = {
    hover: { x: 5, color: "#1A1363", transition: { duration: 0.2 } },
    tap: { x: 3, color: "#1A1363", transition: { duration: 0.15 } }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    })
  };

  const socialVariants = {
    hover: {
      scale: 1.15,
      rotate: 10,
      backgroundColor: "#1A1363",
      color: "white",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95, rotate: 0, transition: { duration: 0.15 } }
  };

  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: { scale: 1.15, backgroundColor: "#251D74", transition: { duration: 0.2 } },
    tap: { scale: 0.9, transition: { duration: 0.15 } }
  };

  return (
    <motion.footer
      className="bg-white text-black px-6 md:px-20 py-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ToastContainer />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        animate="visible"
      >

        <motion.div custom={0} variants={columnVariants} initial="hidden" animate="visible">
          <motion.h1
            className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Gym
          </motion.h1>
          <motion.div
            className="font-semibold space-y-2 text-gray-700"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {["Why Join Us", "About", "Plan", "Coaches", "Inquiry"].map((item, idx) => (
              <motion.a
                key={idx}
                className="block hover:text-[#1A1363] transition cursor-pointer"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div custom={1} variants={columnVariants} initial="hidden" animate="visible">
          <motion.h1
            className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Members
          </motion.h1>
          <motion.div
            className="font-semibold space-y-2 text-gray-700"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {["FAQs", "Contact Us"].map((item, idx) => (
              <motion.a
                key={idx}
                className="block hover:text-[#1A1363] transition cursor-pointer"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div custom={2} variants={columnVariants} initial="hidden" animate="visible">
          <motion.h1
            className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Follow Us
          </motion.h1>

          <motion.div
            className="flex gap-4"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { href: "https://www.facebook.com", icon: FaFacebookF },
              { href: "https://www.instagram.com", icon: FaInstagram }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                className="w-11 h-11 rounded-full border border-[#1A1363] text-[#1A1363] flex items-center justify-center transition-all duration-300"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div custom={3} variants={columnVariants} initial="hidden" animate="visible">
          <motion.h1
            className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Newsletter
          </motion.h1>
          <motion.p className="text-sm text-gray-600 mb-3">
            Get fitness tips & offers in your inbox
          </motion.p>

          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md outline-none focus:border-[#1A1363]"
              whileFocus={{ boxShadow: "0 0 0 3px rgba(26, 19, 99, 0.1)" }}
            />
            <motion.button
              onClick={handleNewsletter}
              className="bg-[#1A1363] text-white px-4 rounded-r-md font-bold hover:bg-[#251D74] transition"
              whileHover={{ backgroundColor: "#251D74", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="my-10 h-px bg-gray-200"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ originX: 0 }}
      ></motion.div>

      <motion.div
        className="text-sm text-gray-500 text-center tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#1A1363]">
          Stamina Gym
        </span>. All rights reserved.
      </motion.div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#1A1363] text-white p-3 rounded-full shadow-xl transition-all"
            variants={scrollButtonVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 50 }}
            whileHover="hover"
            whileTap="tap"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  )
}

export default HomeBottom
