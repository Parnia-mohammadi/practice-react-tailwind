import { Minus, Plus } from "lucide-react";
import { useState } from "react";
const sections = [
  { id: 1, title: "section 1" },
  { id: 2, title: "section 2" },
  { id: 3, title: "section 3" },
];

function Accordion() {
  const [currentTab, setCurrentTab] = useState([]);
  const handleOpen = (id) => {
    setCurrentTab((c) =>
      c.includes(id) ? c.filter((tab) => tab !== id) : [...c, id]
    );
  };

  return (
    <div className="my-4">
      {sections.map((s) => (
        <div key={s.id} onClick={() => handleOpen(s.id)} className="mx-10 *:px-6 *:py-4">
          <div className="flex justify-between items-center text-black bg-gray-200 hover:bg-gray-400 cursor-pointer">
            <p>{s.title}</p>
            {currentTab.includes(s.id) ? (
              <Minus size={20} />
            ) : (
              <Plus size={20} />
            )}
          </div>
          <p
            className={`bg-white text-black text-xl ${
              currentTab.includes(s.id) ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
