"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthGuard({ children }) {

  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");

    if (!logged) router.push("/login");
    else setOk(true);
  }, [router]);

  return (
    <AnimatePresence mode="wait">
      {ok ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
