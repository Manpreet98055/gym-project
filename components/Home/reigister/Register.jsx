'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

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

  return (
    <section className="relative py-20">

      <div className="absolute inset-0 bg-black/30"></div>

      <ToastContainer />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

     
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-6 tracking-[4px]">
              REGISTER
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl text-black font-bold shadow-2xl p-8 pb-10"
            >

              <label>Last Name</label>
              <input {...register("lastName", { required: true })} className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1" />
              {errors.lastName && <p className="text-red-500 text-sm mb-3">Required</p>}

              <label>First Name</label>
              <input {...register("firstName", { required: true })} className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1" />
              {errors.firstName && <p className="text-red-500 text-sm mb-3">Required</p>}

              <label>Email</label>
              <input {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-1" />
              {errors.email && <p className="text-red-500 text-sm mb-3">Enter valid email</p>}

              <label>Phone</label>
              <input {...register("phone", { required: true, pattern: /^[6-9]\d{9}$/ })} className="w-full p-2 border bg-[#BCBCBC] rounded-xl mb-5" />
              {errors.phone && <p className="text-red-500 text-sm mb-3">Enter valid 10-digit phone</p>}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-[#DEBA3B] px-6 py-2 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={clearEntries}
                  className="bg-[#FFFADF] px-6 py-2 text-black rounded-full font-semibold hover:bg-gray-300 transition"
                >
                  Clear Entries
                </button>
              </div>

            </form>
          </div>

      
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Customer's Progress
            </h2>

            <div className="grid grid-cols-2 gap-2">
              {[img1, img2, img3, img4, img5, img6].map((img, i) => (
                <Image key={i} src={img} alt="progress" className="rounded-xl h-28 object-cover w-full" />
              ))}
            </div>
          </div>

        </div> 
      </div>
    </section>
  );
};

export default Register;
