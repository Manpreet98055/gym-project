"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavImage from "@/assets/Navimg.png";
import { NAV_ITEMS } from "../Constants";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("loggedIn");
    setLogged(!!auth);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    if (!logged) {
      router.push("/signup");
      return;
    }
    router.push(href);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setLogged(false);
    setOpen(false);
    router.push("/login");
  };

  const filteredNavItems = NAV_ITEMS.filter(
    (item) => !(logged && item.label === "Register")
  );

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 }
    }),
    hover: { scale: 1.05, color: "#1A1363", transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.92, transition: { duration: 0.1 } }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white shadow-md"}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between px-6 py-2">

          {/* LOGO */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={NavImage} alt="Logo" width={140} height={90} />
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            {filteredNavItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`
                  text-lg font-bold transition
                  ${
                    item.label === "Register"
                      ? "bg-[#FDEE21] px-5 py-2 text-[#1A1363] rounded-full hover:bg-[#fcf58c]"
                      : "text-[#1A1363] hover:text-gray-900"
                  }
                `}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
                whileTap="tap"
              >
                {item.label}
              </motion.button>
            ))}

            {logged && (
              <motion.button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Logout
              </motion.button>
            )}
          </div>

          <motion.button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-[#1A1363]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars />
          </motion.button>
        </div>
      </motion.div>

      {/* MOBILE BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 z-50 h-screen w-64 bg-white shadow-lg md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end p-4">
              <motion.button
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="text-xl text-[#1A1363]" />
              </motion.button>
            </div>

            <motion.div
              className="flex flex-col px-6 gap-4"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {filteredNavItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg font-bold text-[#1A1363]"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {logged && (
                <motion.button
                  onClick={logout}
                  className="mt-4 bg-red-500 text-white py-2 rounded-full font-semibold"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
