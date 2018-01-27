import React, { Component } from 'react';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliFilm: []
        }

    }

    componentDidMount() {
        let url = 'https://ghibliapi.herokuapp.com/films' + this.props.match.param.id;
        fetch(url)
        .then((res) => {
            return res.json();        
        })
        .then((ghibliStudioFilm) => {
            this.setState({ ghibliFilm: ghibliStudioFilm })
        })
    }

    render() {
            return (
              <div 
              key={this.state.ghibliFilm.id}
              className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
              >
                <img
                  className="card-img-top"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">{this.state.ghibliFilm.title}</h5>
                  <p className="card-text">{this.state.ghibliFilm.description}</p>
                  <p>{this.state.ghibliFilm.people}</p>
                </div>
              </div>
            );
        }
}

export default Films;