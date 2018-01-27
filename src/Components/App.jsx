import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import SinglePerson from './SinglePerson';
import SingleFilm from './SingleFilm'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container mx-auto text-center">
          <img className="w-75" src={require(`../srcImages/logo.png`)} alt="Studio Ghibli" />

          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
            <Link className="btn btn-primary" to="/films">
              Films
            </Link>
            <Link className="btn btn-primary" to="/people">
              People
            </Link>
          </div>
          <div className="row">
            <Switch>
              <Route exact path="/films" component={Films} />
              <Route exact path="/people" component={People} />
              <Route exact path="/people/:id" component={SinglePerson} />
              <Route exact path="/films/:id" component={SingleFilm} />
            </Switch>
          </div>
        </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
