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
            </div>
            <div className="footer__lists">
              <l1 className="footer__list1">User-centered Design</l1>
              <l1 className="footer__list">Prototyping</l1>
              <l1 className="footer__list">UX Research</l1>
              <l1 className="footer__list">Visual Communication</l1>
              <l1 className="footer__list">Sketching & Ideating</l1>
              <l1 className="footer__list">Problem Solving</l1>
            </div>
          </div>

          <div className="footer__title">
            <div className="footer__main">
              <span className="footer__line"></span>
              <h3 className="footer__heading">SOCIALs</h3>
            </div>
            <div className="footer__lists">
              <l1 className="footer__list1">LinkedIn</l1>
              <l1 className="footer__list">Behance</l1>
              <l1 className="footer__list">Instagram</l1>
              <l1 className="footer__list">Twitter X</l1>
            </div>
          </div>

          <div className="footer__title">
            <div className="footer__main">
              <span className="footer__line"></span>
              <h3 className="footer__heading">TOOLS I USE</h3>
            </div>
            <div className="footer__lists">
              <l1 className="footer__list1">Figma</l1>
              <l1 className="footer__list">Framer</l1>
              <l1 className="footer__list">Notion</l1>
              <l1 className="footer__list">Protopie</l1>
              <l1 className="footer__list">Adobe Photoshop</l1>
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
