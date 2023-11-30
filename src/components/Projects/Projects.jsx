import "./Projects.css";
function Projects() {
  return (
    <main className="projects">
      <div className="projects__header">
        <h1 className="projects__heading">SELECTED PROJECTS</h1>
        <span className="projects__line"></span>
      </div>
      <h3 className="projects__contents">
        Over the past years, Ive worked with amazing teams to bring dreams to
        life by creating and contributing to some awesome projects. Here are
        some of them.
      </h3>
      <img src="./images/round.png" alt="" className="project__round" />

      <div className="projects__start">
        <div className="projects__startimage">
          <img className="projects__img" src="./images/Startoimg.png" alt="" />
        </div>
        <div className="projects__startcontents">
          <div className="projects__startheader">
            <img
              src="./images/startO.png"
              alt=""
              className="projects__startimg"
            />
            <img
              src="./images/Startoicon.svg"
              alt=""
              className="projects__starticon"
            />
          </div>
          <h3 className="projects__startp">
            In the ever-evolving landscape of entrepreneurship, we designed
            startO to be the catalyst, seamlessly connecting startup owners with
            investors. Its intuitive design and user-friendly interface
            redefines the dynamics of collaboration, simplifying the process for
            both parties and ushering in a new era of effective investment
            matchmaking.
          </h3>
          <button className="projects__startbtn">— VIEW CASE STUDY</button>
        </div>
      </div>

      <div className="projects__pickacho">
        <div className="projects__pickachocontents">
          <div className="projects__pickachoheader">
            <img
              src="./images/Pickachoicon.svg"
              alt=""
              className="projects__pickachoicon"
            />
            <img
              src="./images/pikachu.png"
              alt=""
              className="projects__pickachoheaderimage"
            />
          </div>
          <h3 className="projects__pickachoabout">
            Pikachu is basically a fun side project i took on with a friend, we
            designed a not-so boring app to solve the current pain points
            experienced by crypto wallet users on a global scale. It offers a
            secure, user-friendly, and feature-rich wallet for crypto users.
          </h3>
          <button className="projects__pickachobtn">— VIEW CASE STUDY</button>
        </div>
        <div className="projects__pickachoimage">
          <img
            src="./images/Pickachoimg.png"
            alt=""
            className="projects__pickachoimg"
          />
        </div>
      </div>

      <div className="projects__truck">
        <div className="projects__truckimage">
          <img
            className="projects__truckheaderimg"
            src="./images/Truckimg.png"
            alt=""
          />
        </div>
        <div className="projects__truckcontents">
          <div className="projects__truckheader">
            <img
              src="./images/truckdispatch.png"
              alt=""
              className="projects__truckimg"
            />
            <img
              src="./images/Truckicon.svg"
              alt=""
              className="projects__truckicon"
            />
          </div>
          <h3 className="projects__truckp">
            TruckDispatchs UI design for their road freight website harmonizes
            functionality and aesthetics, ensuring an intuitive platform for the
            seamless transportation of goods via trucks. From streamlined route
            planning to real-time tracking, I worked with the team to come up
            with an interface that prioritizes efficiency, providing a seamless
            experience that encourages clients to manage their freight logistics
            with precision and ease.
          </h3>
          <button className="projects__truckbtn">— VIEW WEBSITE</button>
        </div>
      </div>

      <div className="projects__mil">
        <div className="projects__milcontents">
          <img
            src="./images/Miliicon.svg"
            alt=""
            className="projects__milicon"
          />
          <img
            src="./images/millennium concierge.png"
            alt=""
            className="projects__milheaderimage"
          />

          <h3 className="projects__milabout">
            Totally redesigned Millennium’s concierge website.{" "}
          </h3>
          <h3 className="projects__milabout2">
            At first I saw the website’s design and wondered if they had a
            design team at all because it had tons of UX and UI flaws, so i
            decided the work on it during my spare time, sent to the CEO and he
            totally loved the redesign. Currently I’m working with their dev
            team to implement the new design.
          </h3>
          <button className="projects__milbtn">— VIEW CASE STUDY</button>
        </div>
        <div className="projects__milimage">
          <img
            src="./images/Milishape.png"
            alt=""
            className="projects__milimg"
          />
        </div>
      </div>
    </main>
  );
}
export default Projects;
