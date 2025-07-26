import { XIcon } from "lucide-react";
import { useState } from "react";

function FullscreenOverlayNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`flex flex-col justify-around items-center w-full fixed top-0 left-0 overflow-hidden *:not-first::w-full *:text-center bg-amber-300/80 text-black transition-all duration-1000 ease-in-out ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <XIcon
          className="self-end mx-20"
          size={30}
          onClick={() => setIsOpen(false)}
        />
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <button
        className="border px-4 py-3 rounded-md mx-10 my-4"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
    </div>
  );
}

export default FullscreenOverlayNavigation;
