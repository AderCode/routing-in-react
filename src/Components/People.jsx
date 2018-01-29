import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliPeople: []
        }

    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
        .then((res) => {
            return res.json();        
        })
        .then(studioGhibliPeople => this.setState({ ghibliPeople: studioGhibliPeople }));
    }

    render() {
        let listPeople = this.state.ghibliPeople.map(person => {
            return (
              <div
                className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
                key={person.id}
              >
                <img
                  className="card-img-top mt-3 border border-dark"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title"><b><i>{person.name}</i></b></h5>
                  <p className="card-text">
                    <b>Age:</b> {person.age}
                    <br />
                    <Link to={`/people/${person.id}`}>More Info</Link>
      
                  </p>
                </div>
              </div>
            );
          });
          return <Fragment>{listPeople}</Fragment>;
        }

}

export default People;