import { useState } from "react";

function AnimatedButtonPressedEffect() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`px-6 py-4 rounded-2xl cursor-pointer bg-amber-800 text-orange-100 hover:bg-amber-900 ${
        isClicked
          ? "translate-y-2 border-b-amber-950 border-b-8"
          : "translate-y-0 border-b-amber-400 border-b-10"
      }`}
      onMouseDown={() => setIsClicked(true)}
      onMouseLeave={() => setIsClicked(false)}
    >
      Click me
    </button>
  );
}

export default AnimatedButtonPressedEffect;
