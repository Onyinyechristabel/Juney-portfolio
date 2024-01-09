import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menudrop">
        <a href="/about">
          <h3 className="menu__about">ABOUT</h3>
        </a>
        <a href="#project__main">
          <h3 className="menu__projects">PROJECTS</h3>
        </a>
        <a
          href="https://jachimike.notion.site/jachimike/RESUME-bbfc2f2aa0e6422c9a0a653b82dd1705"
          target="_blank"
          rel="noreferrer"
        >
          <button className="menu__btn">
            <span> —</span> <span> RESUME</span>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Menu;
