import { useState } from "react";

function SideBarPushWithOpacity() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative rounded-2xl border border-amber-300 mx-10 ${
        isOpen ? "sm:h-[60vh] lg:h-[40vh]" : "h-[40vh]"
      }`}
    >
      <div
        className={`bg-black rounded-l-2xl top-0 left-0 h-full z-10 overflow-x-hidden absolute text-white flex flex-col transition-all duration-1000 ease-in-out ${
          isOpen
            ? "w-[30vw] -translate-x-0 opacity-100"
            : "w-[20vw] -translate-x-60 opacity-0"
        }`}
      >
        <button className="self-end px-4 py-2" onClick={() => setIsOpen(false)}>
          x
        </button>
        <div
          className={`flex flex-col items-start justify-evenly h-full gap-1 px-5 *:p-2`}
        >
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div
        className={`flex py-6 px-5 h-full transition-all duration-1000 ease-in-out ${
          isOpen ? "ml-[30vw] bg-amber-50/10" : "ml-0"
        }`}
      >
        <button
          className="border px-4 py-2 rounded-xl h-1/4 "
          onClick={() => setIsOpen(true)}
        >
          OpenSideBar
        </button>
        <p className="mx-4">
          Click on the element below to open the side navigation menu, and push
          this content to the right. Notice that we add a black see-through
          background-color to body when the sidenav is opened.
        </p>
      </div>
    </div>
  );
}

export default SideBarPushWithOpacity;
