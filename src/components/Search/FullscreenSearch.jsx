import { Search } from "lucide-react";

function FullscreenSearch() {
  return (
    <div className="flex gap-0 items-stretch justify-between bg-cyan-950 w-full">
      <input type="text" className="w-full p-3" placeholder="Search ..." />
      <button className="px-6 py-3 bg-cyan-300/10 cursor-pointer" type="submit">
        <Search />
      </button>
    </div>
  );
}

export default FullscreenSearch;
