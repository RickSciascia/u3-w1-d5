import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class FilmRow extends Component {
  state = {
    films: [],
    loading: true,
    error: false,
  };

  getFilms = function () {
    const URL = "http://www.omdbapi.com/?apikey=18f7c4ec&s=";
    fetch(URL + this.props.search)
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("Errore nella response" + r.status);
      })
      .then((data) => {
        console.log(data);
        this.setState({
          films: data.Search,
          loading: false,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Row className="mb-4">
        {this.state.films.map((element) => {
          return <SingleFilm singleElement={element} key={element.imdbID} />;
        })}
      </Row>
    );
  }
}

export default FilmRow;
