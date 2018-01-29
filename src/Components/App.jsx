import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import PersonMoreInfo from "./PersonMoreInfo";
import FilmMoreInfo from "./FilmMoreInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="jumbotron jumbotron-fluid">
            <div className="container mx-auto text-center">
              <img
                className="w-75"
                src={require(`../srcImages/logo.png`)}
                alt="Studio Ghibli"
              />
            </div>
          </div>
          <div className="container">
            <div className="row align-content-center">
              <div className="col-sm-6 mx-auto text-center mb-5">
                <span className="mx-2">
                  <Link className="btn btn-primary" to="/">
                    Home
                  </Link>
                </span>
                <span className="mx-2">
                  <Link className="btn btn-primary" to="/films">
                    Films
                  </Link>
                </span>
                <span className="mx-2">
                  <Link className="btn btn-primary" to="/people">
                    People
                  </Link>
                </span>
              </div>
            </div>
            <div className="row">
              <Switch>
                <Route exact path="/films" component={Films} />
                <Route exact path="/people" component={People} />
                <Route exact path="/people/:id" component={PersonMoreInfo} />
                <Route exact path="/films/:id" component={FilmMoreInfo} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
