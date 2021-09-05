import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/auth";
import { modal } from "../redux/actions/modal";

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
    <form
      onSubmit={handleSubmit}
      className="flex py-10 flex-col items-center w-2/5 "
    >
      <h2 className="text-3xl font-bold mb-5">Login</h2>
      <input
        name="email"
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="email"
        placeholder="Masukan email ...."
      />
      <input
        name="password"
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="password"
        placeholder="Masukan password ...."
      />
      <div className="w-3/4 flex gap-4 justify-center">
        <button
          type="button"
          className="bg-white py-2 w-2/3 font-semibold rounded-md "
          onClick={() => dispatch({ type: "CHANGE_TO_REGISTER" })}
        >
          Buat Akun?
        </button>
        <button
          type="submit"
          className="bg-white py-2 w-2/3 font-semibold rounded-md "
        >
          MASUK
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
