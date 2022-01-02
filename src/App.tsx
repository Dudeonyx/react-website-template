import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useReducer } from "react";
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
