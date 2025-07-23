function SlideLeftOverlay() {
  return (
    <div className="m-10 relative w-fit group">
      <img src="/img_snow.jpg" alt="Snow" />
      <div className="bg-amber-300 text-black text-2xl absolute top-1/2 left-0 -translate-y-1/2 w-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out overflow-hidden group-hover:w-full h-full flex justify-center items-center">
        <p className="text-nowrap">Hello World</p>
      </div>
    </div>
  )
}

export default SlideLeftOverlay