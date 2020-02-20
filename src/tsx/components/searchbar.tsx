import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import ISearch from '../../interfaces/search';

const SearchBar: React.FC<ISearch> = ({ setStrMovie, setIsFetching }: ISearch) => {

    const [name, setName] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const onClick = () => {
        setStrMovie(name);
        setIsFetching(true);
    }
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Name of the movie"
                aria-label="Name of the movie"
                aria-describedby="basic-addon2"
                onChange={handleChange}
            />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={onClick}>Search</Button>
            </InputGroup.Append>
        </InputGroup>);
}

export default SearchBar;
