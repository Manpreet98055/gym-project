'use client'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import HomeImage from '@/assets/HomeRight.png';
import Image from 'next/image';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const router = useRouter();
  const containerRef = useRef(null);

  // 🔥 GSAP (fixed – no reload issue)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".login-form", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".login-image", {
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
    const user = JSON.parse(localStorage.getItem("gymUser"));

    if (!user) {
      toast.error("No account found. Please signup first.");
      return;
    }

    if (data.email === user.email && data.password === user.password) {
      localStorage.setItem("loggedIn", "true");
      toast.success("Login successful 🎉");
      setTimeout(() => router.push("/"), 1200);
    } else {
      toast.error("Invalid email or password");
    }
  };
  

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-[#e1e0e4] px-4"
    >
      <ToastContainer />

      <div className="flex flex-col md:flex-row items-center overflow-hidden max-w-4xl w-full">

        {/* FORM */}
        <div className="login-form w-full md:w-1/2 p-8 text-[#1A1363]">

          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Login
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="font-medium block mb-1 text-2xl">
                Email*
              </label>
              <input
                {...register("email", {
                  required: "Email is required"
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

            {/* PASSWORD */}
            <div>
              <label className="font-medium block mb-1 text-2xl">
                Password*
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required"
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

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#1A1363] text-white cursor-pointer py-3 rounded-xl text-2xl font-extrabold hover:bg-[#251D74] transition"
            >
              Login
            </button>
          </form>

          <p
            onClick={() => router.push("/signup")}
            className="mt-6 text-center text-blue-600 cursor-pointer font-medium"
          >
            Don’t have an account? Sign up
          </p>
        </div>

        {/* IMAGE */}
        <div className="login-image hidden md:flex w-1/2 justify-center items-center p-6">
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
