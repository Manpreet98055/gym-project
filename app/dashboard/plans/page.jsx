'use client'
import React, { useEffect, useState } from "react";

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    validity: "",
    amount: "",
  });
  const [editId, setEditId] = useState(null);

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gym_plans")) || [];
    setPlans(stored);
  }, []);

  // SAVE TO LOCAL STORAGE
  const saveToStorage = (data) => {
    localStorage.setItem("gym_plans", JSON.stringify(data));
    setPlans(data);
  };

  // ADD / UPDATE PLAN
  const handleSave = () => {
    if (!form.name || !form.validity || !form.amount) return;

    if (editId) {
      const updated = plans.map(p =>
        p.id === editId ? { ...form, id: editId } : p
      );
      saveToStorage(updated);
    } else {
      const newPlan = {
        id: Date.now(),
        ...form,
      };
      saveToStorage([...plans, newPlan]);
    }

    setForm({ name: "", validity: "", amount: "" });
    setEditId(null);
  };

  // EDIT PLAN
  const handleEdit = (plan) => {
    setForm({
      name: plan.name,
      validity: plan.validity,
      amount: plan.amount,
    });
    setEditId(plan.id);
  };

  // SEARCH FILTER
  const filteredPlans = plans.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-[#1A1363]">Plans</h1>

        <button
          onClick={() => {
            setForm({ name: "", validity: "", amount: "" });
            setEditId(null);
          }}
          className="bg-white px-5 py-2 rounded-full shadow font-semibold"
        >
          + Add Plan
        </button>
      </div>

      {/* ADD PLAN CARD */}
      <div className="bg-[#3A376C] text-white rounded-2xl p-6 md:p-8 max-w-4xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Plan Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="Validity (Months)"
            value={form.validity}
            onChange={e => setForm({ ...form, validity: e.target.value })}
          />
          <Input
            label="Amount"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
            className="md:col-span-2"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSave}
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
          >
            {editId ? "Update" : "Save"}
          </button>

          <button
            onClick={() => {
              setForm({ name: "", validity: "", amount: "" });
              setEditId(null);
            }}
            className="bg-white text-[#1A1363] px-6 py-2 rounded-full font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* PLAN LIST */}
      <div className="bg-[#7C7FA6] text-white rounded-2xl p-6 overflow-x-auto">

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
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

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left opacity-80">
              <th className="py-2">Plan Name</th>
              <th>Validity</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {filteredPlans.map(p => (
              <tr key={p.id} className="border-t border-white/20">
                <td className="py-2">{p.name}</td>
                <td>{p.validity}</td>
                <td>{p.amount}</td>
                <td>
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-white text-black px-3 py-1 rounded-full text-xs"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

function Input({ label, value, onChange, className = "" }) {
  return (
    <div className={className}>
      <label className="text-sm font-semibold opacity-80">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-3 rounded-xl text-black outline-none"
      />
    </div>
  );
}
