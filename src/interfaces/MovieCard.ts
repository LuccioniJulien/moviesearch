import React from 'react';
import IMovie from './movie';

export default interface IMovieCard {
    setIdMovie:React.Dispatch<React.SetStateAction<string>>,
    movie:IMovie | undefined
}