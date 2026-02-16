"use client";

import { useRouter } from "next/navigation";
import { tokenStorage } from "@repo/api";
import { useAppDispatch, clearAuthDetails } from "@repo/redux";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await tokenStorage.setAccessToken("");
    await tokenStorage.setRefreshToken("");

    dispatch(clearAuthDetails());

    router.replace("/login");
  };

  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col p-5">
      {/* Top Section */}
      <div>
        <h2 className="text-lg font-bold mb-6">Menu</h2>

        <ul className="space-y-3">
          <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-600">Profile</li>
          <li className="cursor-pointer hover:text-blue-600">Settings</li>
        </ul>
      </div>

      {/* Bottom Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
