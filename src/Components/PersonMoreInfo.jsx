import React, { Component} from 'react';

class PersonMoreInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliPerson: []
        }

    }

    componentDidMount() {
        let url = `https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`;
        fetch(url)
        .then((res) => {
            return res.json();        
        })
        .then(studioGhibliPerson => this.setState({ ghibliPerson: studioGhibliPerson }));
    }

    render() {
            return (
              <div
                className="card col-sm-5 my-2 mx-auto d-flex justify-content-center mb-5"
                key={this.state.ghibliPerson.id}
              >
                <img
                  className="card-img-top mt-3 border border-dark"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title"><b><i>{this.state.ghibliPerson.name}</i></b></h5>
                  <p className="card-text">
                    <b>Age:</b> {this.state.ghibliPerson.age}<br />
                    <b>Gender:</b> {this.state.ghibliPerson.gender}<br />
                    <b>Eye Color</b> {this.state.ghibliPerson.eye_color}<br />
                    <b>Hair Color</b> {this.state.ghibliPerson.hair_color}<br />
                    <br />      
                  </p>
                </div>
              </div>
            );
        }
}

export default PersonMoreInfo;