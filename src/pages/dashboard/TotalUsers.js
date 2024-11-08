import React from "react";
import TotalUsersGraph from "./TotalUsersGraph"

const TotalUsers = () => {
  return (
    <div className="flex gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-800">Total Users</h2>
        <p className="text-4xl font-bold text-green-600">25000</p>
      </div>
      <div className="text-center">
        <TotalUsersGraph />
      </div>
    </div>
  );
};

export default TotalUsers;