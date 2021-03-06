import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";

const Home = () => <h1>This is home</h1>;
const Landing = () => <h1>This is the Landing</h1>;
const Projects = () => <h1>This is the projects page</h1>;
const ProjectsNew = () => <h1>Create a new Project</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/landing" component={Landing} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/new" component={ProjectsNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
