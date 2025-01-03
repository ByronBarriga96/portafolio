import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contactus from "./components/Contactus";
import Layout from "./components/Layout";
import Error404 from "./components/Error404";
import Experience from "./components/Experience";
import Education from "./components/Education";
const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route path="*" component={Error404} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
