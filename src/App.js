import { Component } from "react";
import { v4 as uuid4 } from "uuid";

import portfolioContext from "./context/portfolioContext";
import "./App.css";
import Home from "./components/Home/Home";
import AddProject from "./components/AddProject/AddProject";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

const initialProjectsList = [
  {
    id: uuid4(),
    name: "Project Name",
    link: "",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433747/pexels-elly-fairytale-3823207_1_bkpfjm.png",
  },
  {
    id: uuid4(),
    name: "Project Name",
    link: "",
    description:
      "What was your role, your deliverables, if the project was personal, freelancing.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433829/Rectangle_7_1_hfap7a.png",
  },
  {
    id: uuid4(),
    name: "Project Name",
    link: "",
    description:
      "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704433835/Rectangle_7_2_e7pdvl.png",
  },
];

class App extends Component {
  state = { projectsList: initialProjectsList };

  addProject = (projectItem) => {
    const { projectsList } = this.state;
    const updatedProjectsList = [projectItem, ...projectsList];
    this.setState({ projectsList: updatedProjectsList });
  };

  render() {
    const { projectsList } = this.state;
    return (
      <portfolioContext.Provider
        value={{ projectsList, addProject: this.addProject }}
      >
        <Home />
        <AddProject />
        <Projects />
        <Contacts />
      </portfolioContext.Provider>
    );
  }
}

export default App;
