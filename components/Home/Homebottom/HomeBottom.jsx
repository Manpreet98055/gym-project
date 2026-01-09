'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

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

  return (
    <footer className="bg-white text-black px-6 md:px-20 py-12 relative">
      <ToastContainer />

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <h1 className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide">
            Gym
          </h1>
          <div className="font-semibold space-y-2 text-gray-700">
            <a className="block hover:text-[#1A1363] transition">Why Join Us</a>
            <a className="block hover:text-[#1A1363] transition">About</a>
            <a className="block hover:text-[#1A1363] transition">Plan</a>
            <a className="block hover:text-[#1A1363] transition">Coaches</a>
            <a className="block hover:text-[#1A1363] transition">Inquiry</a>
          </div>
        </div>

      
        <div>
          <h1 className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide">
            Members
          </h1>
          <div className="font-semibold space-y-2 text-gray-700">
            <a className="block hover:text-[#1A1363] transition">FAQs</a>
            <a className="block hover:text-[#1A1363] transition">Contact Us</a>
          </div>
        </div>

     
        <div>
          <h1 className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide">
            Follow Us
          </h1>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-[#1A1363]
              text-[#1A1363] flex items-center justify-center
              hover:bg-[#1A1363] hover:text-white hover:scale-110
              transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-[#1A1363]
              text-[#1A1363] flex items-center justify-center
              hover:bg-[#1A1363] hover:text-white hover:scale-110
              transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h1 className="font-extrabold text-xl md:text-2xl mb-4 tracking-wide">
            Newsletter
          </h1>
          <p className="text-sm text-gray-600 mb-3">
            Get fitness tips & offers in your inbox
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300
              rounded-l-md outline-none focus:border-[#1A1363]"
            />
            <button
              onClick={handleNewsletter}
              className="bg-[#1A1363] text-white px-4 rounded-r-md
              font-bold hover:bg-[#251D74] transition"
            >
              Join
            </button>
          </div>
        </div>
      </div>

    
      <div className="my-10 h-px bg-gray-200"></div>

   
      <div className="text-sm text-gray-500 text-center tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#1A1363]">
          Stamina Gym
        </span>. All rights reserved.
      </div>

 
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6
          bg-[#1A1363] text-white p-3 rounded-full shadow-xl
          hover:bg-[#251D74] hover:scale-110 transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default HomeBottom
