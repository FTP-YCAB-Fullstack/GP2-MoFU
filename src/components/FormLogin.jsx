import React from "react";
import { useDispatch } from "react-redux";

const FormLogin = () => {
  const dispatch = useDispatch();

  return (
    <form className="flex py-10 flex-col items-center w-2/5 ">
      <h2 className="text-3xl font-bold mb-5">Login</h2>
      <input
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        placeholder="Masukan username ...."
      />
      <input
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="password"
        placeholder="Masukan password ...."
      />
      <div className="w-3/4 flex gap-4 justify-center">
        <button
          className="bg-white py-2 w-2/3 font-semibold rounded-md "
          onClick={() => dispatch({ type: "CHANGE_TO_REGISTER" })}
        >
          Buat Akun?
        </button>
        <button className="bg-white py-2 w-2/3 font-semibold rounded-md ">
          MASUK
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
