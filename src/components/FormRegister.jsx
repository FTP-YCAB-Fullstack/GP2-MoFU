import React from "react";

const FormRegister = () => {
  return (
    <form className="flex py-10 flex-col items-center w-2/5 ">
      <h2 className="text-3xl font-bold mb-5">Register</h2>
      <input
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        placeholder="Masukan username ...."
      />
      <input
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="password"
        placeholder="Masukan password ...."
      />
      <input
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="password"
        placeholder="Masukan password ...."
      />
      <div className="w-3/4 flex gap-4 justify-center">
        <button className="bg-white py-2 w-2/3 font-semibold rounded-md ">
          MASUK
        </button>
      </div>
      <p className="mt-4">Sudah mempunyai akun? Lakukan Login</p>
    </form>
  );
};

export default FormRegister;
