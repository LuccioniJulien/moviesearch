import React from 'react';
import IMovie from './movie';

export default interface IMovieRow {
    setIdMovie:React.Dispatch<React.SetStateAction<string>>,
    movie:IMovie
}