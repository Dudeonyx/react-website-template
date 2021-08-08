import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import { useCallback, useReducer, useState } from "react";
import HomeStyled from "./pages/HomeStyled";
import HomeTailwind from "./pages/HomeTailwind";

function App() {
  const [isOpen, toggleIsOpen] = useReducer((s) => !s, false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeStyled isOpen={isOpen} toggleIsOpen={toggleIsOpen}></HomeStyled>
        </Route>
        <Route path="/tailwind">
          <HomeTailwind
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
          ></HomeTailwind>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
