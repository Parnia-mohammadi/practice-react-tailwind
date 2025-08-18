function HoverableSideNavigation() {
  return (
    <div
      id="mySidenav"
      className="h-screen flex flex-col justify-evenly fixed top-0 *:text-xl *:font-semibold *:hover:translate-x-0 *:transition-all *:duration-700 *:ease-in-out text-cyan-950 *:w-40 *:p-4 *:rounded-r-xl *:-translate-x-25"
    >
      <a href="#" id="about" className="bg-red-500">
        About
      </a>
      <a href="#" id="blog" className="bg-green-500">
        Blog
      </a>
      <a href="#" id="projects" className="bg-yellow-500">
        Projects
      </a>
      <a href="#" id="contact" className="bg-blue-500">
        Contact
      </a>
    </div>
  );
}

export default HoverableSideNavigation;
