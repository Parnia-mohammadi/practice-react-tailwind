import { useEffect, useState } from "react";

const tabs = [
  {
    id: 1,
    city: "London",
    description: "London is the capital city of England.",
  },
  { id: 2, city: "Paris", description: "Paris is the capital of France." },
  { id: 3, city: "Tokyo", description: "Tokyo is the capital of Japan." },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="text-black mx-10 my-6 rounded-2xl">
      <div className="flex items-center justify-start border-b bg-gray-200 rounded-t-2xl">
        {tabs.map((tab) => (
          <p
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            className={`p-6 cursor-pointer transition-colors duration-500 ease-in-out ${
              activeTab === tab.id
                ? "bg-gray-400 rounded-none"
                : " bg-gray-200 hover:bg-gray-300"
            } ${tab.id === 1 ? "rounded-tl-2xl" : ""}`}
          >
            {tab.city}
          </p>
        ))}
      </div>
      <div key={activeTab} className={`bg-white p-10 rounded-b-2xl`}>
        <p className="animate-fade">{tabs[activeTab - 1].description}</p>
      </div>
    </div>
  );
}

export default Tabs;
