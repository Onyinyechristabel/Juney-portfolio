import "./Footer.css";
function Footer() {
  return (
    <div className="main">
      <div className="footer">
        <img src="./images/header_icon.png" alt="" className="footer__icon" />

        <div className="footer__content">
          <div className="footer__title">
            <div className="footer__main">
              <h3 className="footer__heading">MY SKILLS</h3>
              <img
                onClick={() => {
                  document
                    .querySelector("#dropdown__list")
                    .classList.toggle("open");
                }}
                src="./images/dropdown-1.svg"
                alt=""
                className="dropdown"
              />
            </div>
            <div className="footer__lists" id="dropdown__list">
              <li className="footer__list1">User-centered Design</li>
              <li className="footer__list">Prototyping</li>
              <li className="footer__list">UX Research</li>
              <li className="footer__list">Visual Communication</li>
              <li className="footer__list">Sketching & Ideating</li>
              <li className="footer__list">Problem Solving</li>
            </div>
          </div>

          <div className="footer__title">
            <div className="footer__main">
              <h3 className="footer__heading">SOCIALs</h3>
              <img
                onClick={() => {
                  document
                    .querySelector("#dropdown__listsocial")
                    .classList.toggle("open");
                }}
                src="./images/dropdown-1.svg"
                alt=""
                className="dropdown"
              />
            </div>
            <div className="footer__lists" id="dropdown__listsocial">
              <li className="footer__list1">LinkedIn</li>
              <li className="footer__list">Behance</li>
              <li className="footer__list">Instagram</li>
              <li className="footer__list">Twitter X</li>
            </div>
          </div>

          <div className="footer__title">
            <div className="footer__main">
              <h3 className="footer__heading">TOOLS I USE</h3>
              <img
                onClick={() => {
                  document
                    .querySelector("#dropdown__listtool")
                    .classList.toggle("open");
                }}
                src="./images/dropdown-1.svg"
                alt=""
                className="dropdown"
              />
            </div>
            <div className="footer__lists" id="dropdown__listtool">
              <li className="footer__list1">Figma</li>
              <li className="footer__list">Framer</li>
              <li className="footer__list">Notion</li>
              <li className="footer__list">Protopie</li>
              <li className="footer__list">Adobe Photoshop</li>
            </div>
          </div>
        </div>
      </div>
      <span className="footer__line"></span>
      <div className="footer__footer">
        <h4 className="footer__foot">© 2023. JUNEY. DESIGNED BY ME.</h4>
        <button className="footer__footbtn">— RESUME</button>
      </div>
    </div>
  );
}
export default Footer;
