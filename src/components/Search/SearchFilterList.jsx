import { useMemo, useRef, useState } from "react";
import useOutsideClick from "../../hooks/outsideClick";
import { SearchIcon } from "lucide-react";

const listData = [
  "Adele",
  "Agnes",
  "Billy",
  "Bob",
  "Calvin",
  "Christina",
  "Cindy",
];

function SearchFilterList() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const RefElement = useRef();

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  useOutsideClick(RefElement, "search", () => setIsOpen(false));

  const list = useMemo(
    () =>
      listData.filter((name) =>
        search.length > 0
          ? name.toUpperCase().includes(search.toUpperCase())
          : listData
      ),
    [search, listData]
  );

  return (
    <div ref={RefElement} id="search" className="m-10 w-1/3 relative">
      <input
        value={search}
        onChange={handleFilter}
        onClick={() => setIsOpen(true)}
        type="text"
        placeholder="Search for names ..."
        className={`border pl-12 py-4 rounded-md w-full`}
      />
      <SearchIcon className="absolute top-4 left-4 opacity-50" />
      <ul
        className={`w-full overflow-hidden bg-amber-100 rounded-b-md
             text-cyan-950 transition-all duration-1000 ease-in-out ${
               isOpen
                 ? "opacity-100 -translate-y-2 h-50 overflow-y-scroll"
                 : "opacity-0 -translate-y-16 h-0"
             }`}
      >
        {list.map((name, index) => (
          <li
            className={`p-2.5 hover:bg-amber-300 w-full `}
            key={index}
            onClick={() => {
              setSearch(name);
              setIsOpen(false);
            }}
          >
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilterList;
