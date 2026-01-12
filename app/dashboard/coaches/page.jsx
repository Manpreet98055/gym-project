'use client'
import { useEffect, useState } from "react";

export default function CoachesPage() {
  const [coaches, setCoaches] = useState([]);
  const [search, setSearch] = useState("");


  const [form, setForm] = useState({
    name: "",
    coachId: "",
    contact: "",
    expiry: "",
  });

 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gym_coaches")) || [];
    setCoaches(stored);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("gym_coaches", JSON.stringify(data));
    setCoaches(data);
  };


  const addCoach = () => {
    if (!form.name || !form.coachId) return;

    const newCoach = {
      id: Date.now(),
      ...form,
    };

    const updated = [...coaches, newCoach];
    saveToStorage(updated);

    setForm({ name: "", coachId: "", contact: "", expiry: "" });
  };

  const filtered = coaches.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

   
      <div className="flex flex-wrap justify-between gap-4">
        <h1 className="text-3xl font-bold text-[#1A1363]">
          Active Coaches
        </h1>

        <button
          onClick={addCoach}
          className="bg-white px-6 py-2 rounded-full shadow font-semibold hover:bg-gray-100"
        >
          + Add Coach
        </button>
      </div>

      <div className="bg-[#7C7FA6] rounded-2xl p-6 text-white max-w-5xl">

        <h2 className="font-semibold mb-4">Manage Coaches</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <Input
            label="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <Input
            label="Coach ID"
            value={form.coachId}
            onChange={e => setForm({ ...form, coachId: e.target.value })}
          />

          <Input
            label="Contact"
            value={form.contact}
            onChange={e => setForm({ ...form, contact: e.target.value })}
          />

          <Input
            label="Date Expiry"
            type="date"
            value={form.expiry}
            onChange={e => setForm({ ...form, expiry: e.target.value })}
          />

        </div>
      </div>

    
      <div className="bg-[#7C7FA6] text-white rounded-2xl p-6 overflow-x-auto">

      
        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <div className="text-sm">
            Show
            <select className="mx-2 px-2 py-1 rounded text-black">
              <option>10</option>
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

        {/* TABLE */}
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-left opacity-80">
              <th className="py-2">Name</th>
              <th>Coach ID</th>
              <th>Contact</th>
              <th>Date Expiry</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 opacity-70">
                  No coaches found
                </td>
              </tr>
            )}

            {filtered.map(c => (
              <tr key={c.id} className="border-t border-white/20">
                <td className="py-2">{c.name}</td>
                <td>{c.coachId}</td>
                <td>{c.contact || "-"}</td>
                <td>{c.expiry || "-"}</td>
                <td>
                  <button className="bg-white text-black px-3 py-1 rounded-full text-xs">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION UI */}
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

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-xs opacity-80">{label}</label>
      <input
        {...props}
        className="w-full mt-1 p-2 rounded-lg text-black outline-none"
      />
    </div>
  );
}