import "./Header.css";
function Header() {
  return (
    <div className="header">
      <nav className="nav__header">
        <a href="/" className="icon__href">
          <img src="./images/header_icon.png" alt="" className="icon__header" />
        </a>
        <div className="nav__headings">
          <a href="/about">
            <h4 className="nav__about">ABOUT</h4>
          </a>
          <a href="#project__main">
            <h4 className="nav__about">PROJECTS</h4>
          </a>
          <a href="resume.pdf">
            <button className="nav__resume">— RESUME</button>
          </a>
          <svg
            className="header__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M5.33325 23.0265V21.6931H26.6666V23.0265H5.33325ZM5.33325 16.6665V15.3331H26.6666V16.6665H5.33325ZM5.33325 10.3065V8.97314H26.6666V10.3065H5.33325Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
export default Header;
