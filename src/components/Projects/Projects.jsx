import portfolioContext from "../../context/portfolioContext";

import "./index.css";

const Projects = () => {
  return (
    <portfolioContext.Consumer>
      {(value) => {
        const { projectsList } = value;
        return (
          <article id="projects" className="projects-bg-container">
            <section className="sub-heading-container">
              <h2 className="sub-heading"> Projects</h2>
            </section>
            <section className="container">
              <ul>
                {projectsList.map((eachItem) => (
                  <li key={eachItem.id}>
                    <section className="project-description">
                      <h3>{eachItem.name}</h3>
                      <p>{eachItem.description}</p>
                      <a
                        className="btn-outline"
                        href={eachItem.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </section>
                    <section>
                      {eachItem.img !== undefined ? (
                        <img
                          className="project-img"
                          src={eachItem.img}
                          alt={eachItem.name}
                        />
                      ) : (
                        <section className="project-img-container">
                          <p>Project Image</p>
                        </section>
                      )}
                    </section>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        );
      }}
    </portfolioContext.Consumer>
  );
};

export default Projects;
