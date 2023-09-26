import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="bg-black/20">
      <div className="text-white mt-44 text-center border-red-800 border-3">
        <h1 className="text-xl font-bold font-mono">Terms and Condition</h1>
        <div className="mt-6">
          <h5>1.You Have To follow Our rule</h5>
          <h5>2.Accept Group Policy</h5>
          <h5>3.Don't Push Bad Comment</h5>
          <h5>4.Please Review Our Page</h5>
        </div>
        <p className="text-white font-semibold font-serif">
          Go back to <span className="text-red-700">
          <Link to='/signup'>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Rules;
