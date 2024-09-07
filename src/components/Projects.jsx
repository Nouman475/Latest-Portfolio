import "./../styles/ProjectStyles.css";
import OLMS from "../assets/OLMS.png" 
import shopity from "../assets/shopity.png" 
const projects = [
  {
    title: "Techna",
    description:
      "First responsive website that looks simple and great with pure HTML/CSS",
    link: "https://technanouman.surge.sh/",
    introClass: "first",
  },
  {
    title: "Calculator App",
    description:
      "A simple polymorphism responsive calculator app that does basic arithmetic functions made in JS",
    link: "https://nouman-calculator.surge.sh/",
    introClass: "second",
  },
  {
    title: "BR|Architect",
    description:
      "A decent looking mobile-friendly website made with Bootstrap 5.3.3, a clone of W3 template.",
    link: "https://221784bootstrap1.surge.sh/",
    introClass: "third",
  },
  {
    title: "3D Architect",
    description:
      "A modified form of BR architects with added 3D effect, mobile-friendly and responsive.",
    link: "https://221784bs51.surge.sh/",
    introClass: "fourth",
  },
  {
    title: "NinCom",
    description:
      "A website made using Tailwind CSS and TypeScript for virtual buying.",
    link: "https://nincom.surge.sh/",
    introClass: "fifth",
  },
  {
    title: "N-Tasbih",
    description:
      "An Islamic tasbih web app made in React demonstrating the best use of React hooks.",
    link: "https://ntasbih.netlify.app/",
    introClass: "sixth",
  },
  {
    title: "Authentication",
    description:
      "An authentication system that registers users, manages logins, and handles password management with React.",
    link: "https://nauth.netlify.app/",
    introClass: "seventh",
  },
  {
    title: "CRUD Todo-App",
    description:
      "An app made in a HAKATHON at SMIT with register/login functionality and all CRUD operations.",
    link: "https://ninjatodo.surge.sh/",
    introClass: "eight",
  },
];

function Project() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <div className="mt-5">
          <figure style={{ backgroundColor: "#59e5f4" }}>
            <figcaption>
              <h1>Projects</h1>
            </figcaption>
          </figure>
        </div>
        {/*Featured section*/}
        <div className="featured-header container">
          <div className="featured-heading">Featured</div>
          <div className="featured-buttons">
            <div className="btn-left" data-bs-target="#carouselExample"
            data-bs-slide="prev" >&lt;</div>
            <div className="btn-right" data-bs-target="#carouselExample"
            data-bs-slide="next">&gt;</div>
          </div>
        </div>
        <div id="carouselExample" className="carousel slide container my-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={OLMS} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={shopity} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div className="project-container container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <section className={`intro ${project.introClass}`}></section>
              <div className="meta">
                <div className="meta__inner">
                  <h3>{project.title}</h3>
                  <p>
                    {project.description}{" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read more ...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
