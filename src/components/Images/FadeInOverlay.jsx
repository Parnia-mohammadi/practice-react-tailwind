function FadeInOverlay() {
  return (
    <div className="m-10 relative w-fit group">
      <img src="/img_snow.jpg" alt="Snow" />
      <div className="bg-amber-300 text-black text-2xl absolute top-1/2 left-1/2 -translate-1/2 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out w-full h-full flex justify-center items-center">
        Hello World
      </div>
    </div>
  );
}

export default FadeInOverlay;
