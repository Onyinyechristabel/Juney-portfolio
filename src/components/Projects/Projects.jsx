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
        <div className="projects__startimg">
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
    </main>
  );
}
export default Projects;
