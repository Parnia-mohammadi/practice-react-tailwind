import { useState } from "react";

function ImageZoom({ src, zoom = 2 }) {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div className="flex gap-4">
      <div
        className="relative w-80 h-80 overflow-hidden border rounded-lg"
        onMouseMove={handleMouseMove}
      >
        <img src={src} alt="zoom" className="w-full h-full object-cover" />
      </div>

      <div
        className="w-80 h-80 border rounded-lg bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: `${zoom * 100}%`,
          backgroundPosition: backgroundPosition,
        }}
      />
    </div>
  );
}

export default ImageZoom;
