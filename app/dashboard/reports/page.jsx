'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import NavImage from "@/assets/Navimg.png";


export default function ReportsPage() {
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // LOAD PLANS FROM LOCAL STORAGE
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gym_plans")) || [];
    setPlans(stored);
  }, []);

  // SEARCH FILTER
  const filteredPlans = plans.filter(plan =>
    plan.name.toLowerCase().includes(search.toLowerCase())
  );

  // TOTAL AMOUNT (REPORT SUMMARY)
  const totalAmount = filteredPlans.reduce(
    (sum, p) => sum + Number(p.amount),
    0
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

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-[#1A1363]">
        Sales Report
      </h1>

      {/* DATE FILTER CARD */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6
                      grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label className="text-sm font-semibold">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-gray-100"
          />
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-bold text-[#1A1363]">
            ₹ {totalAmount}
          </p>
        </div>

      </div>

      {/* PAYMENT HISTORY */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">

        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <div className="text-lg font-semibold">
            Plans Report
          </div>

          <input
            placeholder="Search Plan"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-full bg-gray-100 outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Plan Name</th>
                <th>Validity (Months)</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {filteredPlans.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-400">
                    No data found
                  </td>
                </tr>
              )}

              {filteredPlans.map(plan => (
                <tr key={plan.id} className="border-b last:border-0">
                  <td className="py-2">{plan.name}</td>
                  <td>{plan.validity}</td>
                  <td>₹ {plan.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
