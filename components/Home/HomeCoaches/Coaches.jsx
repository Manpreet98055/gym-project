'use client'
import Image from "next/image";
import { COACHES } from "../../../Constants";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import bg from "@/assets/Coachbg.png";
import { motion } from "framer-motion";

const Coaches = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(255,255,255,0.3)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 1.02,
      boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.85, rotate: 0, transition: { duration: 0.15 } }
  };

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-center text-white text-4xl md:text-5xl font-extrabold tracking-[6px] mb-14"
          variants={titleVariants}
        >
          COACHES
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-20"
          variants={containerVariants}
        >
          {COACHES.map((coach, index) => (
            <motion.div
              key={index}
              className="bg-[#BDB7FF] rounded-3xl shadow-2xl flex flex-col items-center relative p-6"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="w-28 h-28 rounded-full border-4 border-white overflow-hidden absolute -top-14 bg-white"
                variants={imageVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image
                  src={coach.image}
                  width={300}
                  height={300}
                  alt={coach.name}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.p
                  className="text-xl text-[#3B3B78] font-bold tracking-wide underline underline-offset-4 decoration-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {coach.name}
                </motion.p>
                <motion.p
                  className="text-sm mt-1 font-bold text-[#180c50]"
                  whileHover={{ scale: 1.05 }}
                >
                  {coach.role}
                </motion.p>
              </motion.div>

              <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={coach.instagram}
                  target="_blank"
                  className="bg-white p-2 rounded-full text-[#4A4AFF] hover:bg-[#4A4AFF] hover:text-white transition"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href={coach.facebook}
                  target="_blank"
                  className="bg-white p-2 rounded-full text-[#4A4AFF] hover:bg-[#4A4AFF] hover:text-white transition"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaFacebookF />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Coaches;
