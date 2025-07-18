import { Globe, Home, Mail, Search, Trash2 } from "lucide-react";

function VerticalBar() {
  return (
    <div className="w-14 h-screen absolute top-0 left-0 flex flex-col items-center justify-between bg-gray-500 text-white text-xl *:hover:text-amber-300 *:hover:scale-125 font-bold *:p-10">
      <a href="">
        <Home size={20} />
      </a>

      <a href="">
        <Search />
      </a>

      <a href="">
        <Mail />
      </a>

      <a href="">
        <Globe />
      </a>

      <a href="">
        <Trash2 />
      </a>
    </div>
  );
}

export default VerticalBar;
