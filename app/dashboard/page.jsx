'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { COACHES } from "@/constants/coachesData.js";
import NavImage from "@/assets/Navimg.png";

export default function DashboardPage() {

  
  const [user, setUser] = useState(null);

 
  const [selectedCoach, setSelectedCoach] = useState(COACHES[0]);

  useEffect(() => {
    const storedUser = localStorage.getItem("gymUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    
  <div>

   <div className=" md:p-4 
                flex items-center justify-between">


  <div className="flex items-center gap-3">
    <Image
      src={NavImage}
      alt="Gym Logo"
      width={220}
      height={40}
      className="object-contain"
    />
   
  </div>

  
  <button
    onClick={() => alert("Feedback form coming soon")}
    className="text-[#1A1363]
               px-4 py-2 rounded-full text-sm font-semibold
               hover:bg-[#301fce] hover:text-red-50 transition"
  >
    Feedback
  </button>
</div>

      <div className="space-y-6">

    
      <div className="bg-white rounded-2xl shadow p-4 md:p-6
                      flex flex-col md:flex-row
                      gap-4 md:items-center md:justify-between">

        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            Welcome,{" "}
            <span className="text-[#1A1363]">
              {user?.username || "Admin"}
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-1 max-w-md">
           Stamina in gyms refers to the ability to sustain prolonged physical or mental effort, which is crucial for overall fitness. Here are some key points:
          </p>
        </div>

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-[#1A1363]">
          {user?.image && (
            <Image
              src={user.image}
              alt="User"
              width={80}
              height={80}
              className="object-cover"
            />
          )}
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Coaches</h3>

          <ul className="space-y-2">
            {COACHES.map((coach, i) => (
              <li
                key={i}
                onClick={() => setSelectedCoach(coach)}
                className={`flex items-center gap-3 cursor-pointer
                            p-2 rounded-lg transition
                  ${
                    selectedCoach.name === coach.name
                      ? "bg-[#1A1363]/10 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
              >
              
                {coach.image ? (
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#1A1363]" />
                )}

                <span className="text-sm">{coach.name}</span>
              </li>
            ))}
          </ul>
        </div>

    
        <div className="bg-white rounded-2xl shadow p-4
                        flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Sales</p>

          <div className="text-4xl font-bold text-[#1A1363] mt-2">
            {selectedCoach.sales}%
          </div>

          <p className="text-xs text-gray-400 mt-1">
            {selectedCoach.name}'s performance
          </p>
        </div>

       
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Calendar</h3>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Calendar here
          </div>
        </div>

     
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Inventory</h3>
          <p className="text-sm text-gray-500">12 Active Items</p>
        </div>

      </div>

   
      <div className="bg-[#7C7FA6] rounded-2xl shadow p-4 md:p-6">
        <h3 className="text-white font-semibold mb-4">
          Active Members
        </h3>

        <div className="space-y-3">
          {["James Medalla", "Kent Charl Mabutas", "John Elmar Rodrigo"].map(
            (name, i) => (
              <div
                key={i}
                className="flex items-center justify-between
                           bg-white/10 p-3 rounded-lg text-white"
              >
                <span className="text-sm">{name}</span>
                <span className="text-xs opacity-80">Active</span>
              </div>
            )
          )}
        </div>
      </div>

    </div>
  </div>
  );
}
