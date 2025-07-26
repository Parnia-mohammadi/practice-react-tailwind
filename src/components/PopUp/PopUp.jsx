import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/outsideClick";

function PopUp() {
  const [isOpen, setiSopen] = useState(false);
  const wrapRef = useRef();
  useOutsideClick(wrapRef, "popUp", () => setiSopen(false));
  return (
    <div
      ref={wrapRef}
      className="relative mx-10 my-4 border w-30 p-2 rounded-sm"
      onClick={() => setiSopen(true)}
    >
      click to popup
      <p
        id="popUp"
        className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out rounded-sm z-10 bg-amber-300/70 text-black px-4 py-2 text-nowrap text-center border w-fit mt-6 after:"" ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        a simple popUp
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-0 w-0 border-x-6 z-20 border-x-transparent border-b-[12px] border-b-amber-300/70"></span>
      </p>
    </div>
  );
}

export default PopUp;
