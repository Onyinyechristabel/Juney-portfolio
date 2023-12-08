import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menudrop">
        <h3 className="menu__about">ABOUT</h3>
        <h3 className="menu__projects">PROJECTS</h3>
        <button className="menu__btn">
          <span> —</span> <span> RESUME</span>
        </button>
      </div>
    </div>
  );
}
export default Menu;
