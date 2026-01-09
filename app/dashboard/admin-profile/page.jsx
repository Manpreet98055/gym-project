'use client'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AdminProfilePage() {

  const [user, setUser] = useState(null);

  // FORM 1 – PROFILE
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  // FORM 2 – PASSWORD
  const {
    register: registerPass,
    handleSubmit: handlePasswordSubmit,
    reset: resetPass,
  } = useForm();

  // LOAD USER
  useEffect(() => {
    const stored = localStorage.getItem("gymUser");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      reset(parsed);
    }
  }, [reset]);

  // UPDATE PROFILE
  const onProfileSave = (data) => {
    const updatedUser = {
      ...user,
      username: data.username,
      email: data.email,
      phone: data.phone,
    };

    localStorage.setItem("gymUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success("Profile updated successfully");
  };

  // CHANGE PASSWORD
  const onPasswordChange = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (data.currentPassword !== user.password) {
      toast.error("Current password is incorrect");
      return;
    }

    const updatedUser = {
      ...user,
      password: data.newPassword,
    };

    localStorage.setItem("gymUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success("Password changed successfully");
    resetPass();
  };

  if (!user) return null;

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-[#1A1363]">
        Admin Information
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT CARD – PROFILE VIEW */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#1A1363]" />
            <p className="font-bold">{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <p><b>Username:</b> {user.username}</p>
            <p><b>Contact no:</b> {user.phone || "N/A"}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        </div>

        {/* RIGHT CARD – EDIT PROFILE */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold mb-4">Edit Profile</h2>

          <form onSubmit={handleSubmit(onProfileSave)} className="space-y-4">

            <div>
              <label className="text-sm font-medium">Username</label>
              <input
                {...register("username")}
                className="w-full mt-1 p-2 rounded-lg bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Contact No.</label>
              <input
                {...register("phone")}
                className="w-full mt-1 p-2 rounded-lg bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                {...register("email")}
                className="w-full mt-1 p-2 rounded-lg bg-gray-100"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-[#1A1363] text-white rounded-lg"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => reset(user)}
                className="px-6 py-2 border rounded-lg"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* PASSWORD CHANGE */}
      <div className="bg-white rounded-2xl shadow p-6 max-w-lg">
        <h2 className="font-semibold mb-4">Password</h2>

        <form
          onSubmit={handlePasswordSubmit(onPasswordChange)}
          className="space-y-4"
        >
          <input
            type="password"
            placeholder="Current Password"
            {...registerPass("currentPassword")}
            className="w-full p-2 rounded-lg bg-gray-100"
          />
          <input
            type="password"
            placeholder="New Password"
            {...registerPass("newPassword")}
            className="w-full p-2 rounded-lg bg-gray-100"
          />
          <input
            type="password"
            placeholder="Re-type Password"
            {...registerPass("confirmPassword")}
            className="w-full p-2 rounded-lg bg-gray-100"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-[#1A1363] text-white rounded-lg"
            >
              Change
            </button>
            <button
              type="button"
              onClick={() => resetPass()}
              className="px-6 py-2 border rounded-lg"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
