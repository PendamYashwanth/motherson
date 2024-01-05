import { Component } from "react";
import { v4 as uuid4 } from "uuid";
import portfolioContext from "../../context/portfolioContext";
import "./index.css";

const imageUrlList = [
  "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433747/pexels-elly-fairytale-3823207_1_bkpfjm.png",
  "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433829/Rectangle_7_1_hfap7a.png",
  "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433835/Rectangle_7_2_e7pdvl.png",
];

const randomImageUrlIndex = Math.floor(Math.random() * imageUrlList.length);

class AddProject extends Component {
  state = { name: "", link: "", description: "" };
  /*--------------------ADD PROJECT------------------------ */
  createAndAddProjectItem = (addProject) => {
    const { name, link, description } = this.state;
    const projectItem = {
      id: uuid4(),
      name,
      link,
      description,
      img: imageUrlList[randomImageUrlIndex],
    };
    addProject(projectItem);
    this.setState({ name: "", link: "", description: "" });
  };
  /*===========================================================*/

  /*--------------------EVENT HANDLERS------------------------*/
  onSubmitForm = (event, addProject) => {
    event.preventDefault();
    this.createAndAddProjectItem(addProject);
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeLink = (event) => {
    this.setState({ link: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  /*===========================================================*/
  render() {
    const { name, link, description } = this.state;
    return (
      <portfolioContext.Consumer>
        {(value) => {
          const { addProject } = value;
          return (
            <article className="add-projects-bg-container">
              <section className="container">
                <section className="sub-heading-container">
                  <h2 className="sub-heading">Add Projects</h2>
                </section>
                <form
                  onSubmit={(event) => {
                    this.onSubmitForm(event, addProject);
                  }}
                >
                  <section className="input-field-container">
                    <label htmlFor="name">Project Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={this.onChangeName}
                      required
                    />
                  </section>
                  <section className="input-field-container">
                    <label htmlFor="link">Project Link</label>
                    <input
                      id="link"
                      type="text"
                      value={link}
                      onChange={this.onChangeLink}
                      required
                    />
                  </section>
                  <section className="input-field-container">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="descriptio"
                      value={description}
                      onChange={this.onChangeDescription}
                      required
                    />
                  </section>
                  <section className="add-btn-container">
                    <button type="submit" className="btn">
                      Add
                    </button>
                  </section>
                </form>
              </section>
            </article>
          );
        }}
      </portfolioContext.Consumer>
    );
  }
}

export default AddProject;
