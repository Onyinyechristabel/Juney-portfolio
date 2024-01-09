import { gsap } from "gsap";
import { useState } from "react";
import "./Header.css";
function Header() {
  const [open, setOpen] = useState(false);

  const activate = () => {
    gsap.to(".menudrop", { height: "20rem" });
    setOpen(true);
  };

  const deactivate = () => {
    gsap.to(".menudrop", { height: "0rem" });
    setOpen(false);
  };

  return (
    <div className="header">
      <nav className="nav__header">
        <a href="/" className="icon__href">
          <img src="./images/whiteicon.png" alt="" className="icon__header" />
        </a>
        <div className="nav__headings">
          <a href="/about">
            <h4 className="nav__about aboutyou">ABOUT</h4>
          </a>
          <a href="#project__main">
            <h4 className="nav__about">PROJECTS</h4>
          </a>
          <a
            href="https://jachimike.notion.site/jachimike/RESUME-bbfc2f2aa0e6422c9a0a653b82dd1705"
            target="_blank"
            rel="noreferrer"
          >
            <button className="nav__resume">
              {" "}
              <span className="dash">— </span>RESUME
            </button>
          </a>
          <svg
            onClick={() => (open ? deactivate() : activate())}
            id="hamburger"
            className="header__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            {open ? (
              <path
                d="M1.33325 1.5835L22.6666 14.4168M1.33325 14.4168L22.6666 1.5835"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
                style={{ translate: "0.4rem 0.9rem" }}
              />
            ) : (
              <>
                <path
                  d="M5.33325 23.0265V21.6931H26.6666V23.0265H5.33325ZM5.33325 16.6665V15.3331H26.6666V16.6665H5.33325ZM5.33325 10.3065V8.97314H26.6666V10.3065H5.33325Z"
                  fill="white"
                />
                <path
                  d="M5.33325 23.0265V21.6931H26.6666V23.0265H5.33325ZM5.33325 16.6665V15.3331H26.6666V16.6665H5.33325ZM5.33325 10.3065V8.97314H26.6666V10.3065H5.33325Z"
                  fill="white"
                />
              </>
            )}
          </svg>
        </div>
      </nav>
    </div>
  );
}
export default Header;
