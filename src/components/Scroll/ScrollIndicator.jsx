import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [scrollWith, setScrollWith] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollFromTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollFromTop / documentHeight) * 100;
      setScrollWith(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 z-50 h-2 w-full bg-amber-50">
      <div
        className="h-2 bg-amber-400 transition-all duration-75"
        style={{ width: `${scrollWith}%` }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
