import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-scroll";
import logo32 from "./imgs/icon32.png";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function NavLink({ children, ...props }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="hover:text-blue-500 cursor-pointer"
      {...props}
    >
      {children}
    </Link>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header>
      <nav
        className="fixed top-0 text-white p-6 shadow-lg rounded-2xl bg-red my-7 mx-9"
        style={{ width: "calc(100% - 2*2.25rem)" }}
      >
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center justify-center">
            <img src={logo32} alt="logo" className="w-10 h-auto" />
          </div>
          <div className="flex justify-around w-1/2 mx-auto items-center">
            <NavLink to="section2">Section 2</NavLink>
            <NavLink to="section3">Section 3</NavLink>
            <NavLink to="section4">Section 4</NavLink>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://chrome.google.com/webstore/detail/your-extension-id"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div className="hero">
      <div className="title_desc">
        <h1>Script Scan</h1>
        <h2>Code to natural language</h2>
        <br />
        <p>
          Summarizes code files hosted on github so that you don't have to waste
          time reading before you start contributing.
        </p>
        <br />
        <br />
        <a
          href="https://chrome.google.com/webstore/detail/your-extension-id"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          Download Extension
        </a>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
