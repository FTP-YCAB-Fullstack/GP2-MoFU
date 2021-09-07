import React from "react";
import CollectTotal from "../components/CollectTotal";

const Admin = () => {
  return (
    <div className="bg-gray-100 h-full pt-4 pb-72">
      <div className="my-5">
        <h1 className="text-center text-3xl font-bold"> Dashboard Admin </h1>
        <div className="flex justify-center text-xl ">
          <CollectTotal />
        </div>
      </div>
    </div>
  );
};

export default Admin;
