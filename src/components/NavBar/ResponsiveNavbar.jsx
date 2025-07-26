import { AlignJustify, XIcon } from "lucide-react";
import { useRef, useState } from "react";

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();
  return (
    <nav className="w-full bg-amber-300 text-black p-4">
      <div className="flex justify-between items-center">
        <div
          className={`flex gap-3 *:hidden *:md:block *:first:block *:text-lg *:font-semibold`}
        >
          <a
            href=""
            className={`block transition-opacity duration-700 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            Home
          </a>
          <a href="">News</a>
          <a href="">Contacts</a>
          <a href="">About</a>
        </div>
        <button
          className="md:hidden place-items-end w-full"
          onClick={() => setIsOpen((is) => !is)}
        >
          {isOpen ? <XIcon /> : <AlignJustify />}
        </button>
      </div>
      <div
        className={`flex flex-col z-10 items-center justify-between gap-2 overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 h-40 md:hidden"
            : "-translate-y-60 opacity-0 h-0"
        }`}
      >
        <a href="">Home</a>
        <a href="">News</a>
        <a href="">Contacts</a>
        <a href="">About</a>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
