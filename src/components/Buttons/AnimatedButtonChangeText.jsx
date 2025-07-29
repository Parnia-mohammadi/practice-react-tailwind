function AnimatedButtonChangeText() {
  return (
    <button className="w-40 border px-10 py-4 rounded-2xl m-10 group hover:px-4">
      <span className="relative">
        <span className="mr-0 transition-all duration-1000 ease-in-out group-hover:mr-6 group-hover:pr-1">
          Hover{" "}
        </span>
        <span className="opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100 absolute top-0 -right-6 group-hover:right-0 tracking-tighter">
          &gt;&gt;
        </span>
      </span>
    </button>
  );
}

export default AnimatedButtonChangeText;
