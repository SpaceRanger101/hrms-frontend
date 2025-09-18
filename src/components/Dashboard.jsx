import React from "react";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        onClick={() => navigate("/departments")}
        className="dashboard-card flex flex-col items-center justify-center cursor-pointer"
      >
        <FaBuilding className="text-indigo-900 text-8xl mb-4" />
        <p className="text-gray-700 text-xl font-semibold">Departments</p>
      </div>

      <div
        onClick={() => navigate("/employees")}
        className="dashboard-card flex flex-col items-center justify-center cursor-pointer"
      >
        <FaUsers className="text-indigo-900 text-8xl mb-4" />
        <p className="text-gray-700 text-xl font-semibold">Employees</p>
      </div>
    </div>
  );
};

export default Dashboard;
