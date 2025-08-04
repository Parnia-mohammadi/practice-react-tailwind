function ToggleSwitch() {
  return (
    <label className="inline-flex items-center cursor-pointer m-10">
      <input type="checkbox" className="sr-only peer" />
      <div className="relative transition-all duration-1000 ease-in-out w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-1000 dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      <span className="m-3 text-sm font-medium">Toggle me</span>
    </label>
  );
}

export default ToggleSwitch;
