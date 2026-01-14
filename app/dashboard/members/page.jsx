'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import NavImage from "@/assets/Navimg.png";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");

  // LOAD MEMBERS
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gym_members")) || [
      {
        id: 1,
        name: "Member 1",
        memberId: "SFM2301N1",
        enrolled: "Jan 11",
        expiry: "Feb 11",
      },
      {
        id: 2,
        name: "Member 2",
        memberId: "SFM2301N2",
        enrolled: "Jan 11",
        expiry: "Feb 11",
      },
      {
        id: 3,
        name: "Member 3",
        memberId: "SFM2301N3",
        enrolled: "Jan 11",
        expiry: "Feb 11",
      },
      {
        id: 4,
        name: "Member 4",
        memberId: "SFM2301N4",
        enrolled: "Jan 11",
        expiry: "Feb 11",
      },
    ];

    localStorage.setItem("gym_members", JSON.stringify(stored));
    setMembers(stored);
  }, []);


  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

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
     
      <h1 className="text-3xl font-bold text-[#1A1363]">
        Active Members
      </h1>

    
      <div className="bg-[#7C7FA6] text-white rounded-2xl p-6 overflow-x-auto">

      
        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            Show
            <select className="bg-white text-black rounded px-2 py-1">
              <option>10</option>
              <option>20</option>
            </select>
            entries
          </div>

          <input
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-full text-black outline-none"
          />
        </div>

    
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-left opacity-80">
              <th className="py-2">Name</th>
              <th>Member ID</th>
              <th>Date Enrolled</th>
              <th>Date Expiration</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 opacity-70">
                  No members found
                </td>
              </tr>
            )}

            {filteredMembers.map(member => (
              <tr
                key={member.id}
                className="border-t border-white/20"
              >
                <td className="py-2">{member.name}</td>
                <td>{member.memberId}</td>
                <td>{member.enrolled}</td>
                <td>{member.expiry}</td>
                <td>
                  <button className="bg-white text-black px-3 py-1 rounded-full text-xs">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-1 bg-gray-300 text-black rounded-full text-sm">
            Previous
          </button>
          <button className="px-4 py-1 bg-gray-300 text-black rounded-full text-sm">
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
