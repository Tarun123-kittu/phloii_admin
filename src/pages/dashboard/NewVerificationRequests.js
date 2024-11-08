import React from "react";
import NewVerificationRequestsGraph from "./NewVerificationRequestsGraph"

const NewVerificationRequests = () => {
  return (
    <div className="flex gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-800">New Requests</h2>
        <p className="text-4xl font-bold text-green-600">2</p>
      </div>
      <div className="text-center">
        <NewVerificationRequestsGraph />
      </div>
    </div>
  );
};

export default NewVerificationRequests;