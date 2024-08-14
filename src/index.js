/* eslint-disable jsx-a11y/anchor-is-valid */
import "animate.css";
import { React, useEffect, useState } from "react";
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
      className="cursor-pointer font-medium"
      {...props}
    >
      <p className="hover:scale-110">{children}</p>
    </Link>
  );
}

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);
  if (isMobile) {
    return null;
  } else {
    return (
      <header>
        <nav
          className="fixed top-0 text-white p-4 shadow-lg rounded-2xl bg-red my-7 mx-9"
          style={{ width: "calc(100% - 2*2.25rem)" }}
        >
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center justify-center">
              <a href="#">
                <img src={logo32} alt="logo" className="w-10 h-auto" />
              </a>
            </div>
            <div className="flex justify-around w-1/2 mx-auto items-center">
              {/* <NavLink to="pricing-section">Pricing</NavLink>
              <NavLink to="faq-section">FAQ</NavLink>
              <NavLink to="credits-section">Credits</NavLink> */}
              <p className="text-center">
                Coming Soon: Repo Summaries, Chatting With Files & Pricing Plan
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://github.com/deathblade287/Script-Scan"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavBar />
    <div className="hero">
      <div className="title_desc">
        {/* className="animate__animated animate__bounce" */}
        <h1>
          Script Scan<sup style={{ verticalAlign: "super" }}>beta</sup>
        </h1>

        <h2>Code to natural language</h2>
        <br />
        <p>Turbocharge your github contributions with succint code summaries</p>
        <br />
        <br />
        <div className="flex flex-row justify-center content-center space-x-5">
          <a
            href="https://chrome.google.com/webstore/detail/script-scan/kljkclbeopgkgkilideimbkdjihdlkag/related"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Download Extension
          </a>
          <a
            href="https://www.youtube.com/watch?v=H6rNOktAarc"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Watch Tutorial
          </a>
        </div>
        <p className="absolute bottom-0 w-full text-center mb-5">
          Please give us some{" "}
          <a
            href="https://weuwch2xx3a.typeform.com/to/N9VUN4xI"
            target="_blank"
            rel="noreferrer noopener"
            className="text-red underline underline-offset-1"
          >
            feedback
          </a>
        </p>
      </div>
    </div>
  </div>
);

reportWebVitals();
