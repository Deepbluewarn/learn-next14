'use client'

import Link from "next/link";
import styles from '../styles/movie.module.css';
import { useRouter } from "next/navigation";

interface IMovieProps {
    id: number;
    title: string;
    poster_path: string;

}

export default function Movie(props: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${props.id}`);
    }
    return (
        <div className={styles.movie}>
            <img src={props.poster_path} alt={props.title} onClick={onClick}/>
            <Link href={`/movies/${props.id}`}>{props.title}</Link>
        </div>
    )
}