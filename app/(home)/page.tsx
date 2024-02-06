import { Metadata } from "next"
import Link from "next/link";
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
        <div>
            {movies.map((movie: any) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    )
}