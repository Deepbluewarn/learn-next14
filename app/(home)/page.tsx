import { Metadata } from "next"
import Link from "next/link";
import Movie from "../../components/Movie";
import styles from '../../styles/home.module.css';
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const metadata: Metadata = {
    title: 'Home'
}

async function getMovies() {
    const res = await fetch(API_URL);
    return await res.json();
}

export default async function Page() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie: any) => (
                <Movie id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    )
}