import "./Footer.css";
function Footer() {
  return (
    <div className="main">
      <div className="footer">
        <a href="/">
          {" "}
          <img
            src="./images/footer__blue.png"
            alt=""
            className="footer__icon"
          />
        </a>

        <div className="footer__content">
          <div className="footer__title">
            <div className="footer__main">
              <h3
                onClick={() => {
                  document
                    .querySelector("#dropdown__list")
                    .classList.toggle("open");
                }}
                className="footer__heading"
              >
                MY SKILLS
              </h3>
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
              <h3
                onClick={() => {
                  document
                    .querySelector("#dropdown__listsocial")
                    .classList.toggle("open");
                }}
                className="footer__heading"
              >
                SOCIALs
              </h3>
            </div>
            <div className="footer__lists" id="dropdown__listsocial">
              <a href="https://www.dictionary.com/browse/church">
                {" "}
                <li className="footer__list1">LinkedIn</li>
              </a>
              <a href="https://www.dictionary.com/browse/church">
                {" "}
                <li className="footer__list">Behance</li>
              </a>
              <a href="https://www.dictionary.com/browse/church">
                {" "}
                <li className="footer__list">Instagram</li>
              </a>
              <a href="https://www.dictionary.com/browse/church">
                {" "}
                <li className="footer__list">Twitter X</li>
              </a>
            </div>
          </div>

          <div className="footer__title">
            <div className="footer__main">
              <h3
                onClick={() => {
                  document
                    .querySelector("#dropdown__listtool")
                    .classList.toggle("open");
                }}
                className="footer__heading"
              >
                TOOLS I USE
              </h3>
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
        <a href="resume.pdf">
          <button className="footer__footbtn">
            <span>—</span> RESUME
          </button>
        </a>
      </div>
    </div>
  );
}
export default Footer;
