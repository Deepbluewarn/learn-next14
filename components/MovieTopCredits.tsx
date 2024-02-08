import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-top-credits.module.css";
import Profile from "./Profile";
import { getMovie } from "./MovieInfo";

export async function getMovieCredits(movieId: string) {
    const res = await fetch(`${API_URL}/${movieId}/credits`);
    return await res.json();
}

export default async function MovieCredits({ id, count, showAll }: { id: string, count?: number, showAll?: boolean }) {
    const credits = await getMovieCredits(id);
    const movie = await getMovie(id);

    return (
        <div className={styles.container}>
            <h4>
                {
                    showAll ? 'Top Credits' : `${movie.title} |  Credits`
                }
            </h4> 
            <ul>
                {credits.slice(0, count ? count : undefined).map((credit: any) => (
                    <li key={credit.id}>
                        <Profile credit={credit}/>
                    </li>
                ))}
                {
                    showAll && (
                        <li>
                            <div className={styles.see_all}>
                                <Link href={`/movies/${id}/credits`}>
                                    See All &rarr;
                                </Link>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}