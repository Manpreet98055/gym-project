"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {

  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");

    if (!logged) router.push("/login");
    else setOk(true);
  }, [router]);

  if (!ok) return null;

  return children;
}
