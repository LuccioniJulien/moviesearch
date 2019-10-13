import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMovieRow from '../../../interfaces/movieRow';

const MoviesFragment: React.FC<IMovieRow> = ({ setIdMovie, movie: { Title, imdbID } }: IMovieRow) => {
    return (
        <ListGroup.Item><Button onClick={() => { setIdMovie(imdbID) }} style={{ marginRight: 24 }} variant="outline-info">Info</Button>{Title}</ListGroup.Item >
    );
}

export default MoviesFragment;