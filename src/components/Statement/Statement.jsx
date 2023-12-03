import "./Statement.css";
function Statement() {
  return (
    <div className="statement">
      <span className="statement__line"></span>
      <img src="./images/statement.svg" alt="" className="statement__img" />

      <h2 className="statement__content">
        LET’S MAKE A STATEMENT <span className="statement__span">TOGETHER</span>{" "}
        WITH YOUR NEXT PROJECT.
      </h2>
      <img src="./images/grid.png" alt="" className="statement__grid" />
      <button className="statement__btn"> — GET IN TOUCH</button>
    </div>
  );
}
export default Statement;
