import { API_URL } from "../app/(home)/page";


async function getVideos(movieId: string) {
  const res = await fetch(`${API_URL}/${movieId}/videos`);
  const data = await res.json();
  return data;
}

export default async function MovieVideos({id} : {id: string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}