import React from "react";

function CheckBox() {
  return (
    <div className="m-10 flex items-center w-fit">
      <div className="rounded-md overflow-hidden w-6 h-6 border-transparent">
        <input
          id="yellow-checkbox"
          type="checkbox"
          className="w-6 h-6 accent-amber-500"
        />
      </div>
      <label htmlFor="yellow-checkbox" className="ml-2 text-sm font-medium">
        Yellow
      </label>
    </div>
  );
}

export default CheckBox;
