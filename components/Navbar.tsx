export default function Navbar() {
  return (
    <div
      className="navbar bg-base-100 sticky top-0 z-10 md:mx-auto"
      data-aos="fade-up"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="/how-to-use.html">How To Use</a>
            </li>
            <li>
              <a
                href="https://github.com/ryuuwiz/team-generator"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">
          <span className="text-primary">Team</span>&nbsp;Generator
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="/how-to-use.html">How To Use</a>
          </li>
          <li>
            <a href="https://github.com/ryuuwiz/team-generator" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
