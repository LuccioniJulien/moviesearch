import IMovie from "../interfaces/movie";
import { BASEAPI, KEYAPI } from "./constant";

export async function getMovies(name: string): Promise<Array<IMovie>> {
    const nameEncoded = encodeURIComponent(name);
    const response = await fetch(`${BASEAPI}/?apikey=${KEYAPI}&s=${nameEncoded}`);
    const json = await response.json();
    if (json["Error"])
        throw json["Error"];

    const movies: Array<IMovie> = json["Search"] || [];
    return movies;
}


export async function getMovieDetails(imdbID: string): Promise<IMovie> {
    const nameEncoded = encodeURIComponent(imdbID);
    const response = await fetch(`${BASEAPI}/?apikey=${KEYAPI}&i=${nameEncoded}`);
    const json = await response.json();
    if (json["Error"])
        throw json["Error"];

    const movie: IMovie = json;
    return movie;
}
