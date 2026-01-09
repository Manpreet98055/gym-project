'use client'
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const Visitgym = () => {
  return (
    <section className="relative py-16"
      
    >

     

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[4px] text-white mb-10">
          VISIT OUR GYM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Stamina%20Fitness%20Gym&output=embed"
              className="w-full h-[350px]"
            ></iframe>
          </div>

          <div className="bg-[#2C2C2C] text-white rounded-3xl shadow-xl p-8">

            <p className="text-sm font-semibold mb-3 tracking-[2px]">
              Address:
            </p>
            <p className="text-lg mb-5 leading-relaxed">
              12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY
            </p>

         
            <p className="text-sm font-semibold mb-3 tracking-[2px]">
              Email:
            </p>
            <a
              href="mailto:manpreet62303@gmail.com"
              className="text-lg mb-5 text-amber-300 block hover:underline"
            >
              manpreet62303@gmail.com
            </a>

            <p className="text-sm font-semibold mb-3 tracking-[2px]">
              Contact Number:
            </p>
            <a
              href="tel:+916230318816"
              className="text-lg text-green-400 mb-6 block hover:underline"
            >
              +91 6230318816
            </a>

           
            <p className="font-semibold mb-3 tracking-[2px]">
              OUR SOCIALS:
            </p>

            <div className="flex gap-4">
              
          
              <a
                href="https://www.facebook.com/profile.php?id=100025028982486"
                target="_blank"
                className="bg-white text-black p-2 rounded-full hover:scale-110 transition cursor-pointer"
              >
                <FaFacebookF />
              </a>

         
              <a
                href="mailto:manpreet62303@gmail.com"
                className="bg-white text-black p-2 rounded-full hover:scale-110 transition cursor-pointer"
              >
                <FaEnvelope />
              </a>

             
              <a
                href="https://www.instagram.com/maan_s17_/"
                target="_blank"
                className="bg-white text-black p-2 rounded-full hover:scale-110 transition cursor-pointer"
              >
                <FaInstagram />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Visitgym;
