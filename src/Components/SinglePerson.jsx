import React, { Component} from 'react';

class SinglePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliPerson: []
        }

    }

    componentDidMount() {
        let url = 'https://ghibliapi.herokuapp.com/people/' + this.props.match.params.id;
        fetch(url)
        .then((res) => {
            return res.json();        
        })
        .then(studioGhibliPerson => this.setState({ ghibliPerson: studioGhibliPerson }));
    }

    render() {
            return (
              <div
                className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
                key={this.state.ghibliPerson.id}
              >
                <img
                  className="card-img-top p-1"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">Name: {this.state.ghibliPerson.name}</h5>
                  <p className="card-text">
                    Age: {this.state.ghibliPerson.age}
                    <br />      
                  </p>
                </div>
              </div>
            );
        }
}

export default SinglePerson;