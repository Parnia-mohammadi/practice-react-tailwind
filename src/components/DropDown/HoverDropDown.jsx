function HoverDropDown() {
  return (
    <div className="m-10 group w-fit h-14">
      <button className="py-4 px-6 rounded-md border group-hover:bg-amber-100 group-hover:text-indigo-950">Hover me</button>
      <div className="group-hover:translate-y-0 group-hover:opacity-100 -translate-y-20 opacity-0 flex flex-col items-start justify-center gap-0 *:py-3 *:px-6
       transition duration-700 ">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
      </div>
    </div>
  );
}

export default HoverDropDown;
