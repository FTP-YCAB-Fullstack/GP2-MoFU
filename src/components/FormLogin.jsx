import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/auth";
import { modal } from "../redux/actions/modal";
import { motion } from "framer-motion";
import logo from "../assets/logo_tulisan_warna.svg";

const FormLogin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    users.forEach((user) => {
      if (user.email === data.email) {
        if (user.password === data.password) {
          dispatch(loginUser(user));
          dispatch(modal());
        }
      }
    });
    e.target.reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="flex py-10 flex-col items-center w-full md:w-2/5 "
    >
      <div className="w-3/5 mx-auto md:hidden">
        <img src={logo} alt="logo" className="w-full h-36" />
      </div>
      <h2 className="text-3xl font-bold mb-5">Login</h2>
      <input
        name="email"
        className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg"
        type="email"
        placeholder="Masukan email ...."
      />
      <input
        name="password"
        className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg"
        type="password"
        placeholder="Masukan password ...."
      />
      <div className="w-3/4 flex gap-4 justify-center mt-6">
        <button
          type="button"
          className="bg-gray-400 hover:bg-gray-500 transition duration-200 text-white py-2 w-2/3 font-semibold rounded-md "
          onClick={() => dispatch({ type: "CHANGE_TO_REGISTER" })}
        >
          Buat Akun?
        </button>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 transition duration-200 text-white py-2 w-2/3 font-semibold rounded-md "
        >
          MASUK
        </button>
      </div>
    </motion.form>
  );
};

export default FormLogin;
