import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./contents/Home";
import Contact from "./contents/Contact";
import About from "./contents/About";
import Navbar from "./components/Navbar";
import TheamSwitcher from "./contents/TheamSwitcher";
import Projects from "./contents/Projects";
export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Contact} path="/contact" />
            <Route exact component={About} path="/about" />
            <Route exact component={Projects} path="/projects" />
            <Route component={Home} path="*" />
          </Switch>
        </div>
        <TheamSwitcher />
      </div>
    </Router>
  );
}
