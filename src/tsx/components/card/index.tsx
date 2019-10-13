import React from "react";
import { Card, Button } from 'react-bootstrap';
import IMovieCard from "../../../interfaces/MovieCard";
const MyCard: React.FC<IMovieCard> = ({ setIdMovie, movie: { Title, imdbID,Plot,Poster } }: IMovieCard) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Plot}
                </Card.Text>
                <Button variant="primary" onClick={()=>setIdMovie("")}>Go back</Button>
            </Card.Body>
        </Card>);
}

export default MyCard;
