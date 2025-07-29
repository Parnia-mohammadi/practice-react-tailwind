import { useEffect, useState } from "react";

function ProgressBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsExpanded(true), 3000);
  }, []);

  return (
    <div className="m-10 rounded-xl border w-30 h-4 p-0 relative">
      {/* <progress className="m-0 " value={50} max={100} /> */}
      <div
        className={`bg-amber-400 absolute top-0 left-0 h-4 rounded-l-xl transition-all ease-in-out duration-1000 ${
          isExpanded ? "w-10" : "w-0"
        }`}
      ></div>
    </div>
  );
}

export default ProgressBar;
