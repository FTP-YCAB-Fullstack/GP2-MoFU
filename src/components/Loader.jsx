import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-50 flex flex-row justify-center items-center h-screen w-screen">
      <div
        style={{ animationDelay: "0.3s" }}
        className="animate-bounce mx-2 w-10 h-10  bg-green-300 rounded-full"
      ></div>
      <div
        style={{ animationDelay: "0.6s" }}
        className="animate-bounce mx-2 w-10 h-10  bg-green-300 rounded-full"
      ></div>
      <div
        style={{ animationDelay: "0.9s" }}
        className="animate-bounce mx-2 w-10 h-10  bg-green-300 rounded-full"
      ></div>
    </div>
  );
};

export default Loader;
