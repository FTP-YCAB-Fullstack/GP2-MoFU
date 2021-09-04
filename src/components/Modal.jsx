import React from "react";
import Exitem from "./ex-item.jpg";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { modal as modalAction } from "../redux/actions/modal";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.log(modal);
  const closeModal = (e) => {
    let check = e.target.classList.contains("bg-modal");
    if (check) dispatch(modalAction("login"));
  };

  return (
    <div
      onClick={closeModal}
      style={{ backgroundColor: "#00000087" }}
      className={
        (modal.status ? "flex" : "hidden") +
        " bg-modal fixed items-center justify-center w-screen h-screen top-0 left-0 "
      }
    >
      <div className="bg-gray-200 flex relative justify-center w-4/6 h-3/5 mx-auto items-center rounded-lg shadow-xl">
        <div className="w-3/5 ml-5 ">
          {/* Untuk mengisi dengan gambar di sebelah kanan */}
          <img src={Exitem} alt="illustration" className="mx-auto w-full" />
        </div>
        {modal.form === "login" ? <FormLogin /> : <FormRegister />}
        <button
          onClick={() => dispatch(modalAction())}
          className="text-red-400 text-2xl hover:text-red-600 absolute top-4 right-4 cursor-pointer "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
