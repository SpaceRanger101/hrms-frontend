import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Layout = ({ children, username, setUser }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-inter">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-900 text-white p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold mb-8">Menu</h2>
          <nav className="flex flex-col gap-4">
            <Link to="/dashboard" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-300">Dashboard</Link>
            <Link to="/departments" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-300">Departments</Link>
            <Link to="/employees" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-300">Employees</Link>
          </nav>
          <div className="mt-auto">
            <button onClick={handleLogout} className="w-full py-2 bg-red-600 rounded-md hover:bg-red-500 transition">
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <h1 className="text-xl font-bold text-indigo-900">Welcome, {username}</h1>
          <button onClick={() => setSidebarOpen((s) => !s)} className="p-2 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            <FaBars />
          </button>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>

      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="sidebar-overlay" />}
    </div>
  );
};

export default Layout;
