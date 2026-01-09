'use client'
import React from "react";

export default function RegistrationPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1363]">
          Become a Member!
        </h1>
        <p className="text-yellow-500 text-lg font-semibold mt-1">
          Register
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow p-6 md:p-8 max-w-4xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input label="Name of Participant" />
          <Input label="Date of Join" type="date" />

          <Input label="Email Address" />
          <Input label="Contact No." />

          <Input label="Plan" />
          <Input label="Price" />

        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-[#1A1363] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#251D74]">
            Avail Membership
          </button>

          <button className="border border-[#1A1363] text-[#1A1363] px-6 py-2 rounded-full font-semibold hover:bg-[#1A1363] hover:text-white">
            Cancel
          </button>
        </div>
      </div>

    </div>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        className="w-full mt-1 p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1A1363]"
      />
    </div>
  );
}
