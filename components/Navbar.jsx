"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavImage from "@/assets/Navimg.png";
import { NAV_ITEMS } from "../Constants";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

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

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white shadow-md"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-2">

          {/* LOGO */}
          <div className="flex items-center">
            <Image src={NavImage} alt="Logo" width={140} height={90} />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            {filteredNavItems.map((item) => (
              <button
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
              >
                {item.label}
              </button>
            ))}

            {logged && (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>

         
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-[#1A1363]"
          >
            <FaBars />
          </button>
        </div>
      </div>

  
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

    
      <div
        className={`
          fixed top-0 right-0 z-50
          h-screen w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <FaTimes className="text-xl text-[#1A1363]" />
          </button>
        </div>

        <div className="flex flex-col px-6 gap-4">
          {filteredNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-lg font-bold text-[#1A1363]"
            >
              {item.label}
            </button>
          ))}

          {logged && (
            <button
              onClick={logout}
              className="mt-4 bg-red-500 text-white py-2 rounded-full font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>

     
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
