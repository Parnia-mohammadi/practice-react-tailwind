import { useState } from "react";

function MenuIcon() {
  const [isClicked, setIsClicked] = useState(false);
  const bar = "h-1 w-7 bg-white";

  return (
    <div
      className="flex flex-col gap-1.5 m-10 *:transition-all *:duration-1000 *:ease-in-out"
      onMouseDown={() => setIsClicked(true)}
      onMouseLeave={() => setIsClicked(false)}
    >
      <div
        className={`${bar} ${
          isClicked ? "-rotate-45 translate-y-2.5" : "opacity-100"
        }`}
      ></div>
      <div
        className={`${bar} ${isClicked ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`${bar} ${
          isClicked ? "rotate-45 -translate-y-2.5" : "opacity-100"
        }`}
      ></div>
    </div>
  );
}

export default MenuIcon;
