import { X } from "lucide-react";
import { Component, useRef, useState } from "react";
import useOutsideClick from "../../hooks/outsideClick";

function ModalGetComponent({ children, isOpen, handleOpen }) {
  const wrapperRef = useRef();
  useOutsideClick(wrapperRef, "modalContent", () => handleOpen(false));

  return (
    <div
      className={`bg-amber-100/30 fixed top-0 left-0 h-screen transition-all duration-1000 ease-in-out overflow-hidden ${
        isOpen ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    >
      <button
        className="text-black fixed top-8 right-8"
        onClick={() => handleOpen(false)}
      >
        <X size={30} />
      </button>
      <div
        id="modalContent"
        ref={wrapperRef}
        className="absolute left-1/2 top-1/2 -translate-1/2 bg-black rounded-2xl"
      >
        {children}
      </div>
    </div>
  );
}

export default ModalGetComponent;
