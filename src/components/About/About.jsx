/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
function About() {
  return (
    <div className="about">
      <Header />
      <Menu />
      <div className="about__details">
        <div className="junyaboutpicture">
          <img src="./images/junyabout.png" alt="" className="junyabout__img" />
        </div>
        <div className="about__me">
          <h1 className="about__header">Hi there,</h1>
          <h3 className="about__p1">
            I am Jones Oguadinma Jachimike, and I enjoy simplifying digital
            experiences that cater to the needs of end-users through my designs.
          </h3>
          <h3 className="about__p2">
            With over 2+ years of experience, I've designed industry-standard
            products for growing companies. In addition to my design expertise,
            I'm also a marketing strategist and proficient in no-code
            development with Framer. This combination provides me with a unique
            perspective when it comes to problem solving.
          </h3>
          <h3 className="about__p3">
            I usually adapt to evolving design trends, technologies, and project
            requirements. I successfully navigate challenges by adjusting my
            strategies, or learning new tools to ensure project success and
            innovation for your project.
          </h3>
          <h3 className="about__p4">
            When I'm not engrossed in creative pursuits, you'll find me dancing,
            seeing a movie, playing video games or indulging in curious
            "YouTube" searches on topics my mates would find weird.
          </h3>
          <h3 className="about__p5">
            I'm currently based in Enugu, Nigeria, and I'm open to relocating
            for exciting opportunities. I'd love to hear more about your
            project.
          </h3>
          <button className="about__btn">
            <span>—</span>CONTACT ME
          </button>
        </div>
      </div>
      <div className="about__icon">
        <p className="about__tool">TOOL STACK</p>
        <img src="./images/redpie.png" alt="" className="about__icons" />
        <img src="./images/whitelogo.png" alt="" className="about__icons" />
        <img src="./images/notion.png" alt="" className="about__icons" />
        <img src="./images/rainbow.png" alt="" className="about__icons" />
        <img src="./images/ps.png" alt="" className="about__icons" />
      </div>

      <Footer />
    </div>
  );
}
export default About;
