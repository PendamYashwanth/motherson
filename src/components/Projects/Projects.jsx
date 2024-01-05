import portfolioContext from "../../context/portfolioContext";

import "./index.css";

const Projects = () => {
  return (
    <portfolioContext.Consumer>
      {(value) => {
        const { projectsList } = value;
        return (
          <article id="projects" className="projects-bg-container">
            <section className="sub-heading-container mb">
              <h2 className="sub-heading"> Projects</h2>
            </section>
            <section className="container">
              <ul>
                {projectsList.map((eachItem, index) =>
                  index % 2 === 0 ? (
                    <li key={eachItem.id}>
                      <section className="project-description-container">
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
                      <section className="project-img-container">
                        {eachItem.img !== undefined ? (
                          <img
                            className={index % 2 === 0 && "project-img-right"}
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
                  ) : (
                    <li key={eachItem.id}>
                      <section className="project-img-container">
                        {eachItem.img !== undefined ? (
                          <img
                            className={index % 2 !== 0 && "project-img-left"}
                            src={eachItem.img}
                            alt={eachItem.name}
                          />
                        ) : (
                          <section className="project-img-container">
                            <p>Project Image</p>
                          </section>
                        )}
                      </section>
                      <section className="project-description-container">
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
                    </li>
                  )
                )}
              </ul>
            </section>
          </article>
        );
      }}
    </portfolioContext.Consumer>
  );
};

export default Projects;
