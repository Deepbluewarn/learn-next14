import Movie from "../../../../../components/Movie"
import styles from '../../../../../styles/home.module.css';
import { API_URL } from "../../../../constants";
import { getMovie } from "../../../../../components/MovieInfo";

export async function generateMetadata({params: {id}} : {params: {id: string}}) {
    const movie = await getMovie(id);
    
    return {
        title: movie.title
    }
}

async function getSimilarMovies(id: string) {
    const res = await fetch(`${API_URL}/${id}/similar`);
    return await res.json();
}

export default async function SimilarMovies({params: {id}}: {params: {id: string}}) {
    const movies = await getSimilarMovies(id);

    return (
        <div className={styles.container}>
            {movies.map((movie: any) => (
                <Movie id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    )
}