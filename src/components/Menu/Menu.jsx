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
        <button className="menu__btn">
          <span> —</span> <span> RESUME</span>
        </button>
      </div>
    </div>
  );
}
export default Menu;
