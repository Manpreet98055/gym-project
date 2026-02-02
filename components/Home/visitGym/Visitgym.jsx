'use client'
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Visitgym = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { y: -10, transition: { duration: 0.3 } }
  };

  const socialVariants = {
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#FFD700" },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative py-16">

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.h1
          className="text-3xl md:text-4xl font-extrabold tracking-[4px] text-white mb-10"
          variants={titleVariants}
        >
          VISIT OUR GYM
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" variants={containerVariants}>

          <motion.div className="bg-white rounded-3xl shadow-xl overflow-hidden" variants={cardVariants} whileHover="hover">
            <motion.iframe
              src="https://www.google.com/maps?q=Stamina%20Fitness%20Gym&output=embed"
              className="w-full h-[350px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            ></motion.iframe>
          </motion.div>

          <motion.div className="bg-[#2C2C2C] text-white rounded-3xl shadow-xl p-8" variants={cardVariants} whileHover="hover">

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <p className="text-sm font-semibold mb-3 tracking-[2px]">
                Address:
              </p>
              <p className="text-lg mb-5 leading-relaxed">
                12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-sm font-semibold mb-3 tracking-[2px]">
                Email:
              </p>
              <motion.a
                href="mailto:manpreet62303@gmail.com"
                className="text-lg mb-5 text-amber-300 block hover:underline"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                manpreet62303@gmail.com
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-sm font-semibold mb-3 tracking-[2px]">
                Contact Number:
              </p>
              <motion.a
                href="tel:+916230318816"
                className="text-lg text-green-400 mb-6 block hover:underline"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                +91 6230318816
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="font-semibold mb-3 tracking-[2px]">
                OUR SOCIALS:
              </p>

              <motion.div className="flex gap-4" variants={containerVariants} initial="hidden" animate="visible">
                <motion.a
                  href="https://www.facebook.com/profile.php?id=100025028982486"
                  target="_blank"
                  className="bg-white text-black p-2 rounded-full transition cursor-pointer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaFacebookF />
                </motion.a>

                <motion.a
                  href="mailto:manpreet62303@gmail.com"
                  className="bg-white text-black p-2 rounded-full transition cursor-pointer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaEnvelope />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/maan_s17_/"
                  target="_blank"
                  className="bg-white text-black p-2 rounded-full transition cursor-pointer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaInstagram />
                </motion.a>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Visitgym;
