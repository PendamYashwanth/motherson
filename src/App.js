import { Component } from "react";
import { v4 as uuid4 } from "uuid";

import portfolioContext from "./context/portfolioContext";
import Home from "./components/Home/Home";
import AddProject from "./components/AddProject/AddProject";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";

const initialProjectsList = [
  {
    id: uuid4(),
    name: "Portfolio",
    link: "https://yashwanthpendam.com/",
    description:
      "My personal portfolio, being a React app, emphasizes the reusability of components to enhance efficiency and maintainability. During its creation, I incorporated semantic tags, CSS variables, element states, and implemented a black-and-white theme using styled components to further optimize the reusability aspect.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704364227/Y_2_bwbpgc.png",
  },
  {
    id: uuid4(),
    name: "InstaShare",
    link: "https://yashinstashare.ccbp.tech/",
    description:
      "I developed this project with React; it serves as my mini project at Nxt Wave.[userCredintials: {username: 'rahul', password: 'rahul@2021'}]",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704014328/insta-share_u5jxfz.png",
  },
  {
    id: uuid4(),
    name: "NxtWatch",
    link: "https://yashnxtwatch.ccbp.tech/",
    description:
      "I crafted this project utilizing React, incorporating styled components and integrating a black-and-white theme. [userCredintials: {username: 'rahul', password: 'rahul@2021'}]",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704013712/download_1_mphjvj.png",
  },
  {
    id: uuid4(),
    name: "Jobby App",
    link: "https://yashjobbyapp.ccbp.tech/",
    description:
      "Jobby App marks my initial React frontend assignment, where I gained insights into authentication, routing, and the lifecycle methods of components. [userCredintials: {username: 'rahul', password: 'rahul@2021'}]",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704013619/jobby-app-jobs-success-lg-output-v0_zk4y1q.png",
  },
  {
    id: uuid4(),
    name: "Todo App",
    link: "https://pendamyashwanth.github.io/dw-todo-app/",
    description:
      "Through the Todo App, I acquired knowledge of dynamic web applications, employing the Document Object Model (DOM) and utilizing local storage functionalities.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704112910/Todo_App_-_Google_Chrome_01-01-2024_18_10_06_trsvch.png",
  },
  {
    id: uuid4(),
    name: "VR Website",
    link: "https://pendamyashwanth.github.io/rw-vr-website/",
    description:
      "The e-commerce website stands as my initial endeavor in crafting a multipage responsive site, and I utilized Bootstrap for its development.",
    img: "https://assets.ccbp.in/frontend/react-js/projects-showcase/vr-website-img.png",
  },
  {
    id: uuid4(),
    name: "Ecommerce",
    link: "https://pendamyashwanth.github.io/rw-ecommerce/",
    description:
      "The e-commerce website is the first responsive site I've created using Bootstrap.",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704077232/Screenshot_2024-01-01_081414_bupe5l.png",
  },
  {
    id: uuid4(),
    name: "Tourism",
    link: "https://pendamyashwanth.github.io/sw-tourism-website/",
    description:
      "The tourism website marks my initial attempt at building a static site",
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704079137/Screenshot_2024-01-01_084718_qihlqk.png",
  },
];

const localStorageKey = "portfolio_projects_data";

class App extends Component {
  state = {
    projectsList: [],
  };

  componentDidMount = () => {
    const storedProjectsList = localStorage.getItem(localStorageKey);
    const parseStoredProjectsList = JSON.parse(storedProjectsList);
    console.log(parseStoredProjectsList);
    if (parseStoredProjectsList === null) {
      this.setState({ projectsList: initialProjectsList });
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(initialProjectsList)
      );
    } else {
      this.setState({ projectsList: parseStoredProjectsList });
    }
  };

  componentDidUpdate = () => {
    const { projectsList } = this.state;
    const stringifyProjectList = JSON.stringify(projectsList);
    localStorage.setItem(localStorageKey, stringifyProjectList);
  };

  addProject = (projectItem) => {
    const { projectsList } = this.state;
    const updatedProjectsList = [projectItem, ...projectsList];
    this.setState({ projectsList: updatedProjectsList });
  };

  render() {
    const { projectsList } = this.state;
    console.log(projectsList + "render");
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
