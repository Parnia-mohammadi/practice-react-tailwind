import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border">
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-4 rounded-lg border mx-10 my-4"
        >
          Open modal
        </button>
      </div>
      <div
        className={`transition-all duration-1000 ease-in-out overflow-hidden bg-amber-100/20 m-0 fixed top-0 left-0 ${
          isOpen ? "h-screen w-full" : "w-0 h-0 top-1/2 left-1/2"
        }`}
      >
        <div
          className={`w-1/2 h-1/2 left-1/2 top-1/2 text-black border overflow-hidden translate-1/2 bg-amber-400 p-10 rounded-2xl `}
        >
          <div className=" flex justify-between items-center pb-2 mb-2 border-b font-semibold">
            <p>Header</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold hover:scale-125"
            >
              x
            </button>
          </div>
          Modal
        </div>
      </div>
    </div>
  );
}

export default Modal;
