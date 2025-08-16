import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/outsideClick";

const options = ["option1", "option2", "option3"];
function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const refElement = useRef();
  useOutsideClick(refElement, "dropdownButton", () => setIsOpen(false));

  return (
    <div className="m-10 relative w-1/4">
      {/* <select
        name=""
        id=""
        className="appearance-none bg-amber-300 text-cyan-950 p-3 rounded-md w-full "
      >
        <option value="1" className="">
          Audi
        </option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-cyan-950">
        ▼
      </span> */}
      <button
        id="dropdownButton"
        className={`w-full flex justify-between items-center px-4 py-2 m-0 bg-amber-300 text-cyan-950 focus:outline-none ${
          isOpen ? "rounded-t-md border-b border-cyan-950" : "rounded-md"
        }`}
        onClick={() => setIsOpen((is) => !is)}
      >
        {selected.length == 0 ? "choose one car" : selected}
        <span>▼</span>
      </button>
      <ul
        id="dropdownMenu"
        className={`absolute z-10 w-full bg-amber-300 text-cyan-950 m-0 shadow-lg ${
          isOpen ? "block rounded-b-md" : "hidden"
        }`}
        ref={refElement}
      >
        {options.map((op, index) => (
          <li
            className={`px-4 py-2 hover:bg-cyan-900 last:rounded-b-md hover:text-amber-300 cursor-pointer ${
              selected === op ? "bg-cyan-800 text-amber-300" : ""
            }`}
            key={index}
            onClick={() => {
              setSelected(op);
              setIsOpen(false);
            }}
          >
            {op}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomSelect;
