'use client'
import Image from "next/image";
import { COACHES } from "../../../Constants";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import bg from "@/assets/Coachbg.png";

const Coaches = () => {
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <h1 className="text-center text-white text-4xl md:text-5xl font-extrabold tracking-[6px] mb-14">
          COACHES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {COACHES.map((coach, index) => (
            <div
              key={index}
              className="bg-[#BDB7FF] rounded-3xl shadow-2xl flex flex-col items-center relative p-6
              hover:scale-105 transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(255,255,255,0.3)]"
            >
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden absolute -top-14 bg-white">
                <Image
                  src={coach.image}
                  width={300}
                  height={300}
                  alt={coach.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-16 text-center">
               <p className="text-xl text-[#3B3B78] font-bold tracking-wide underline underline-offset-4 decoration-2">
  {coach.name}
</p>
                <p className="text-sm mt-1 font-bold text-[#180c50]">
                  {coach.role}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <a href={coach.instagram} target="_blank"
                  className="bg-white p-2 rounded-full text-[#4A4AFF] hover:bg-[#4A4AFF] hover:text-white transition">
                  <FaInstagram />
                </a>
                <a href={coach.facebook} target="_blank"
                  className="bg-white p-2 rounded-full text-[#4A4AFF] hover:bg-[#4A4AFF] hover:text-white transition">
                  <FaFacebookF />
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Coaches;
