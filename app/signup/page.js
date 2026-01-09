'use client'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import HomeImage from '@/assets/HomeRight.png';
import Image from 'next/image';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Signup() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const router = useRouter();
  const containerRef = useRef(null);

  // ✅ GSAP (safe, no stuck)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".signup-form", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".signup-image", {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = (data) => {
    localStorage.setItem("gymUser", JSON.stringify(data));
    toast.success("Account created 🎉 Redirecting to login…");
    setTimeout(() => router.push("/login"), 1500);
    reset();
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-[#e1e0e4] px-4"
    >
      <ToastContainer />

      <div className="flex flex-col md:flex-row items-center overflow-hidden max-w-4xl w-full">

     
        <div className="signup-form w-full md:w-1/2 p-8 text-[#1A1363]">

          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        
            <div>
              <label className="font-medium block mb-1 text-2xl">
                Username*
              </label>
              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                })}
                placeholder="Username"
                className="w-full border-3 p-3 rounded-xl bg-white focus:outline-none focus:border-[#1A1363]"
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

       
            <div>
              <label className="font-medium block mb-1 text-2xl">
                Email*
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Email must be a valid @gmail.com address",
                  },
                })}
                placeholder="Email"
                className="w-full border-3 p-3 rounded-xl bg-white focus:outline-none focus:border-[#1A1363]"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

       
            <div>
              <label className="font-medium block mb-1 text-2xl">
                Password*
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 18,
                    message: "Password must be less than 18 characters",
                  },
                })}
                placeholder="Password"
                className="w-full border-3 p-3 rounded-xl bg-white focus:outline-none focus:border-[#1A1363]"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

         
            <button
              type="submit"
              className="w-full bg-[#1A1363] cursor-pointer text-white py-3 rounded-xl text-2xl font-extrabold hover:bg-[#251D74] transition"
            >
              Register
            </button>
          </form>

          <p
            onClick={() => router.push("/login")}
            className="mt-6 text-center text-blue-600 cursor-pointer font-medium"
          >
            Already have an account? Login
          </p>
        </div>

        
        <div className="signup-image hidden md:flex w-1/2 justify-center items-center p-6">
          <Image
            src={HomeImage}
            alt="Home Image"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}
