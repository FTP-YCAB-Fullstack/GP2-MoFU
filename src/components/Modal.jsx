import React from "react";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { modal as modalAction } from "../redux/actions/modal";
import AuthIllustration from "../assets/auth_illustration.svg";
import { motion } from "framer-motion";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModal = (e) => {
    let check = e.target.classList.contains("bg-modal");
    if (check) dispatch(modalAction("login"));
  };

  if (modal.status) {
    return (
      <div
        onClick={closeModal}
        style={{ backgroundColor: "#00000087" }}
        className={
          "flex bg-modal fixed items-center justify-center w-screen h-screen top-0 left-0 "
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.2,
            type: "spring",
            bounce: 0.3,
          }}
          className="bg-gray-100 flex relative justify-center w-screen h-screen md:w-4/6 md:h-4/5 mx-auto items-center rounded-lg shadow-xl"
        >
          <div className="hidden md:block md:w-3/5 ml-5 ">
            {/* Untuk mengisi dengan gambar di sebelah kiri */}
            <img
              src={AuthIllustration}
              alt="illustration"
              className="mx-auto w-full"
            />
          </div>
          {modal.form === "login" ? <FormLogin /> : <FormRegister />}
          <button
            onClick={() => dispatch(modalAction())}
            className="text-red-400 text-2xl hover:text-red-600 absolute top-4 right-4 cursor-pointer "
          >
            <svg
              className="w-8 h-8"
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
        </motion.div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
