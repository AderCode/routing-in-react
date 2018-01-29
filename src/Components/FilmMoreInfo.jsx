import React, { Component } from 'react';

class FilmMoreInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliFilm: []
        }

    }

    componentDidMount() {
        let url = `https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`;
        fetch(url)
        .then((res) => {
            return res.json();        
        })
        .then((ghibliStudioFilm) => {
            this.setState({ ghibliFilm: ghibliStudioFilm })
        })
        console.log(this.props)
    }

    render() {
            return (
              <div 
              key={this.state.ghibliFilm.id}
              className="card col-sm-5 my-2 mx-auto d-flex justify-content-center mb-5"
              >
                <img
                  className="card-img-top mt-3 border border-dark"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">{this.state.ghibliFilm.title}</h5>
                  <p className="card-text">
                  <b>Director:</b> {this.state.ghibliFilm.director}<br />
                  <b>Producer:</b> {this.state.ghibliFilm.producer}<br />
                  <b>Release Date:</b> {this.state.ghibliFilm.release_date}<br />
                  <b>Rotten Tomatoes Score:</b> {this.state.ghibliFilm.rt_score}<br />
                  <br />
                  <b>Description:</b> {this.state.ghibliFilm.description}<br />
                  <br />
                  </p>
                </div>
              </div>
            );
        }
}

export default FilmMoreInfo;