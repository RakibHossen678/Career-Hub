import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">
        <a>Home</a>
      </NavLink>
      <NavLink to="/jobs">
        <a>Jobs</a>
      </NavLink>
      <NavLink to="/applied">
        <a>Applied Jobs</a>
      </NavLink>
      <NavLink to="/statistics">
        <a>Statistics</a>
      </NavLink>
      <NavLink to="/blogs">
        <a>Blog</a>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-9 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="#_"
          className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative">Star Applying</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
