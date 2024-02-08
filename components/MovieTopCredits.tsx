import { API_URL } from "../app/constants";
import styles from "../styles/movie-top-credits.module.css";

export async function getMovieCredits(movieId: string) {
    const res = await fetch(`${API_URL}/${movieId}/credits`);
    return await res.json();
}

export default async function MovieTopCredits({ id }: { id: string }) {
    const credits = await getMovieCredits(id);

    return (
        <div className={styles.container}>
            <h4>Top Credits</h4>
            <ul>
                {credits.slice(0, 4).map((credit: any) => (
                    <li key={credit.id}>
                        <div className={styles.profile}>
                            {
                                credit.profile_path ?
                                    <img src={credit.profile_path} alt={credit.name} />
                                    :
                                    <div className={styles.profile_fallback}>❔</div>
                            }
                            <span>{credit.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}