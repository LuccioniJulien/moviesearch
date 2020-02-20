import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { MovieRow, SearchBar, Card, Toast } from "./tsx/components";
import { getMovies, getMovieDetails } from "./api"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMovie from './interfaces/movie';

const App: React.FC = () => {

  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingDetailsFinished, setIsFetchingDetailsFinished] = useState(false);
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [strMovie, setStrMovie] = useState("");
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [idMovie, setIdMovie] = useState("");
  const [movie, setMovie] = useState<IMovie>();

  const toastAction = { show, setShow, message: errorMessage };
  const searchAction = { setIsFetching, setStrMovie };

  async function setMyMoviesInState() {
    try {
      const movies: Array<IMovie> = await getMovies(strMovie);
      setMovies(movies);
    } catch (error) {
      console.log("error")
      setErrorMessage(error);
      setShow(true)
    }
    setIsFetching(false);
  }

  async function setMyMovieInState() {
    try {
      const movie: IMovie = await getMovieDetails(idMovie);
      setMovie(movie);
    } catch (error) {
      console.log("error")
      setErrorMessage(error);
      setShow(true)
    }
    setIsFetchingDetailsFinished(true);
  }

  useEffect(() => {
    if (isFetching)
      setMyMoviesInState()
    if (idMovie === "")
      setIsFetchingDetailsFinished(false)
    if (idMovie !== "" && !isFetchingDetailsFinished) {
      setMyMovieInState()
    }
  })

  return (
    <>
      <Toast {...toastAction} />
      <div className="Top">
        <div className="Wrap">
          <SearchBar {...searchAction} />
        </div>
      </div>
      <div className="Center">
        <Row>
          <Col>{idMovie !== "" && isFetchingDetailsFinished ? <Card {...{ setIdMovie, movie }}/> : (<ListGroup>
            {movies.map((movie, index) => <MovieRow key={index.toString()} {...{ setIdMovie, movie }} ></MovieRow>)}
          </ListGroup>)}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
