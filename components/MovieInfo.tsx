import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import Provider from "./Provider";

export async function getMovie(movieId: string) {
    const res = await fetch(`${API_URL}/${movieId}`);
    const data = await res.json();
    return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>💜 {movie.vote_average.toFixed(1)}</h3>
                <p className={styles.overview}>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
                <Provider id={id}/>
            </div>
        </div>
    )
}