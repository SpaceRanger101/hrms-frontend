import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/departments">Departments</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navbar;
