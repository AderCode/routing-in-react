import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ghibliFilms: []
        }

    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => {
            return res.json();        
        })
        .then((ghibliStudioFilms) => {
            this.setState({ ghibliFilms: ghibliStudioFilms })
        })
    }

    render() {
        let listFilms = this.state.ghibliFilms.map(film => {
            return (
              <div 
              key={film.id}
              className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
              >
                <img
                  className="card-img-top"
                  src={require(`../srcImages/movie-banner.jpg`)}
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text">{film.description}</p>
                  <Link to={"/films/" + film.id}>View This Person</Link>
                  </div>
              </div>
            );
          });
          return <Fragment>{listFilms}</Fragment>;
        }

}

export default Films;