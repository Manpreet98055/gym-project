'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/assets/progress1.jpg";
import img2 from "@/assets/progress2.jpg";
import img3 from "@/assets/progress3.jpg";
import img4 from "@/assets/progress4.jpg";
import img5 from "@/assets/progress5.jpg";
import img6 from "@/assets/progress6.jpg";

const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    const stored = JSON.parse(localStorage.getItem("gymUsers")) || [];
    stored.push(data);
    localStorage.setItem("gymUsers", JSON.stringify(stored));

    toast.success("Saved to Local Storage!");

    reset(); 
  };

  const clearEntries = () => {
    reset();   
    localStorage.removeItem("gymUsers");  
    toast.info("All entries cleared!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.4 }
    }),
    hover: { scale: 1.1 }
  };

  return (
    <section className="relative py-20">

      <div className="absolute inset-0 bg-black/30"></div>

      <ToastContainer />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>

          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-3xl font-extrabold text-white mb-6 tracking-[4px]"
              variants={titleVariants}
            >
              REGISTER
            </motion.h1>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl text-black font-bold shadow-2xl p-8 pb-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >

              <label>Last Name</label>
              <motion.input
                {...register("lastName", { required: true })}
                className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.lastName && <motion.p className="text-red-500 text-sm mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Required</motion.p>}

              <label>First Name</label>
              <motion.input
                {...register("firstName", { required: true })}
                className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.firstName && <motion.p className="text-red-500 text-sm mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Required</motion.p>}

              <label>Email</label>
              <motion.input
                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && <motion.p className="text-red-500 text-sm mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Enter valid email</motion.p>}

              <label>Phone</label>
              <motion.input
                {...register("phone", { required: true, pattern: /^[6-9]\d{9}$/ })}
                className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-5"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.phone && <motion.p className="text-red-500 text-sm mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Enter valid 10-digit phone</motion.p>}

              <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <motion.button
                  type="submit"
                  className="bg-[#DEBA3B] px-6 py-2 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Submit
                </motion.button>

                <motion.button
                  type="button"
                  onClick={clearEntries}
                  className="bg-[#FFFADF] px-6 py-2 text-black rounded-full font-semibold hover:bg-gray-300 transition"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Clear Entries
                </motion.button>
              </motion.div>

            </motion.form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-3xl font-bold text-yellow-400 mb-6"
              variants={titleVariants}
            >
              Customer's Progress
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[img1, img2, img3, img4, img5, img6].map((img, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={imageVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >
                  <Image src={img} alt="progress" className="rounded-xl h-28 object-cover w-full" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Register;
