import { API_URL } from "../app/(home)/page";


async function getMovie(movieId: string) {
    const res = await fetch(`${API_URL}/${movieId}`);
    const data = await res.json();
    return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const videos = await getMovie(id);
    return <h6>{JSON.stringify(videos)}</h6>
}