import { useState } from "react";

const images = [
  { name: "lights", alt: "Northern Lights" },
  { name: "mountains", alt: "Mountains and fjords" },
  { name: "nature", alt: "Nature and sunrise" },
  { name: "snow", alt: "Snow" },
];

function ImageGallery() {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="m-10 p-10 border rounded-2xl">
      <div className="relative mb-6 w-fit mx-auto">
        <span className="absolute top-4 left-4 font-semibold bg-gray-700/60 p-2 rounded-lg text-white">
          {selectedImg + 1} / {images.length}
        </span>
        <img
          key={selectedImg}
          className="rounded-xl animate-fade"
          src={`/img_${images[selectedImg].name}.jpg`}
          alt={images[selectedImg].alt}
        />
        <button
          className={`transition-colors duration-1000 ease-in-out absolute top-1/2 -translate-y-1/2 left-0 hover:bg-gray-800/70 rounded-r-sm text-2xl px-3 py-2 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer`}
          disabled={selectedImg == 0}
          onClick={() => setSelectedImg((s) => s - 1)}
        >
          &#10094;
        </button>
        <button
          className={`transition-colors duration-1000 ease-in-out absolute top-1/2 -translate-y-1/2 right-0 hover:bg-gray-800/70 rounded-l-sm text-2xl px-3 py-2 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer`}
          disabled={selectedImg == 3}
          onClick={() => setSelectedImg((s) => s + 1)}
        >
          &#10095;
        </button>
      </div>
      <p className="text-center text-2xl mb-6 font-bold">
        {images[selectedImg].alt}
      </p>
      <div className="flex gap-0">
        {images.map((img) => (
          <img
            key={img.name}
            src={`/img_${img.name}.jpg`}
            alt={img.alt}
            className={`w-1/4 cursor-pointer hover:opacity-100 ${
              images[selectedImg].name === img.name ? "opacity-100" : "opacity-50"
            }`}
            onClick={() =>
              setSelectedImg(images.findIndex((el) => el.name === img.name))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
