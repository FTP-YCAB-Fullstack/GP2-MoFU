import React from "react";
import { useDispatch } from "react-redux";
import axios from "../axios";
import { registerUser } from "../redux/actions/users";

const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      confirm_password: form.confirm_password.value,
    };
    if (data.confirm_password === data.password) {
      try {
        const createUser = async () => {
          let response = await axios.post("/users", {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: 2,
          });
          if (response.status === 201) {
            dispatch({ type: "CHANGE_TO_LOGIN" });
            dispatch(registerUser(response.data));
          }
        };
        createUser();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex py-10 flex-col items-center w-2/5 "
    >
      <h2 className="text-3xl font-bold mb-5">Register</h2>
      <input
        name="name"
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="text"
        placeholder="Masukan username ...."
      />
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
      <input
        name="confirm_password"
        className=" outline-none  mb-3 p-2 w-3/4 mt-2"
        type="password"
        placeholder="Masukan password ...."
      />
      <div className="w-3/4 flex gap-4 justify-center">
        <button
          type="submit"
          className="bg-white py-2 w-2/3 font-semibold rounded-md "
        >
          MASUK
        </button>
      </div>
      <p className="mt-4">Sudah mempunyai akun? Lakukan Login</p>
    </form>
  );
};

export default FormRegister;
