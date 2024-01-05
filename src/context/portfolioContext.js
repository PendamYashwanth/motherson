import React from "react";

const portfolioContext = React.createContext({
  projectsList: [],
  addProject: () => {},
});

export default portfolioContext;
