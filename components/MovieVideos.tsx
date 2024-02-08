import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(movieId: string) {
  const res = await fetch(`${API_URL}/${movieId}/videos`);
  const data = await res.json();
  return data;
}

export default async function MovieVideos({id} : {id: string}) {
    const videos = await getVideos(id);
    return (
      <div className={styles.container}>
        {videos.map((video) => {
          return (
            <iframe
              key={video.key}
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )
        })}
      </div>
    )
}