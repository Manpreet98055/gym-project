'use client'
import { useRouter, usePathname } from "next/navigation";
import { FaUserCircle, FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TopLoader from "@/components/ui/TopLoader";
import ConfirmModal from "@/components/ui/ConfirmModal";

const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Registrations", path: "/dashboard/registrations" },
  { name: "Members", path: "/dashboard/members" },
  { name: "Coaches", path: "/dashboard/coaches" },
  { name: "Plans", path: "/dashboard/plans" },
  { name: "Inventory", path: "/dashboard/inventory" },
  { name: "Reports", path: "/dashboard/reports" },
  { name: "Admin Profile", path: "/dashboard/admin-profile" },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false); // ✅ FIXED

  const contentRef = useRef(null);
  const prevPath = useRef(pathname);


  useEffect(() => {
    const storedUser = localStorage.getItem("gymUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);


  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => setLoading(false),
        }
      );

      prevPath.current = pathname;
    }
  }, [pathname]);

  const handleNavigate = (path) => {
    if (loading) return;
    setLoading(true);
    setOpen(false);
    router.push(path);
  };

  return (
    <div className="bg-[#ECE9E9] min-h-screen flex">

    
      <TopLoader loading={loading} />

     
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow px-4 py-3 flex items-center justify-between">
        <button disabled={loading} onClick={() => setOpen(true)}>
          <FaBars className="text-2xl text-[#1A1363]" />
        </button>
        <h2 className="font-bold text-[#1A1363]">Dashboard</h2>
      </div>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          bg-[#1A1363] text-white
          flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 md:hidden"
        >
          <FaTimes />
        </button>

        <div className="p-6 border-b border-white/20">
          <FaUserCircle className="text-5xl mb-3" />
          <h2 className="font-bold text-lg">
            {user?.username || "Admin"}
          </h2>
          <p className="text-sm text-white/70">
            {user?.email || "admin@gym.com"}
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menu.map(item => (
            <button
              key={item.path}
              disabled={loading}
              onClick={() => handleNavigate(item.path)}
              className={`w-full text-left px-4 py-3 rounded-lg transition
                ${
                  pathname === item.path
                    ? "bg-white text-[#1A1363] font-bold"
                    : "hover:bg-white/20"
                } disabled:opacity-50`}
            >
              {item.name}
            </button>
          ))}

 <button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            setOpen(false);
            router.push("/");
          }}
          className="mx-4 my-3 flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/30 font-semibold transition disabled:opacity-50"
        >
          <FaArrowLeft />
          Back to Home
        </button>

      
        <button
          disabled={loading}
          onClick={() => setConfirmOpen(true)}
          className="m-4 py-2 px-4 rounded-xl hover:bg-red-600 disabled:opacity-50"
        >
          ⍈ Logout
        </button>

        </nav>

    
       
      </aside>

     
      <main
        ref={contentRef}
        className="
          flex-1
          pt-16 md:pt-6
          px-4 md:px-6
          md:ml-72
          overflow-y-auto
        "
      >
        {children}
      </main>

      {/* LOGOUT CONFIRM MODAL */}
      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          setLoading(true);

          setTimeout(() => {
            localStorage.clear();
            router.push("/login");
          }, 400);
        }}
      />
    </div>
  );
}
