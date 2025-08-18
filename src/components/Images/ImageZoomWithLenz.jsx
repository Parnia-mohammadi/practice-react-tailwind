import { useState } from "react";
// shape can be "square" or "circle"
function ImageZoomWithLenz({
  src,
  zoom = 2,
  lensSize = 150,
  shape = "square",
}) {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
  const [lensPosition, setLensPosition] = useState(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xBackground = ((e.pageX - left - window.scrollX) / width) * 100;
    const yBackground = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${xBackground}% ${yBackground}%`);

    if (x < 0 || y < 0 || x > width || y > height) {
      setLensPosition(null);
      return;
    }

    setLensPosition({ x, y });
  };

  return (
    <div className="flex gap-4 m-10">
      <div
        className="relative w-80 h-80 overflow-hidden border rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setLensPosition(null)}
      >
        <img src={src} alt="zoom" className="w-full h-full object-cover" />
        <p className="absolute bottom-0 left-0 p-4 bg-amber-50/40 w-full">
          some text on the picture
        </p>
        {lensPosition && (
          <div
            className={`absolute pointer-events-none border-2 border-black shadow-lg`}
            style={{
              width: lensSize,
              height: lensSize,
              top: lensPosition.y - lensSize / 2,
              left: lensPosition.x - lensSize / 2,
              borderRadius: shape === "circle" ? "50%" : "0",
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${zoom * 100}% ${zoom * 100}%`,
              backgroundPosition: `${(lensPosition.x / 384) * 100}% ${
                (lensPosition.y / 384) * 100
              }%`,
            }}
          />
        )}
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

export default ImageZoomWithLenz;
