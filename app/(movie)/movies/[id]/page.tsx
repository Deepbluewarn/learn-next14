import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";
import MovieCredits from "../../../../components/MovieTopCredits";

interface IParams {
    params: { id: string };
}
export async function generateMetadata({params: {id}} : IParams) {
    const movie = await getMovie(id);
    
    return {
        title: movie.title
    }
}

export default function MovieDetail({params: {id}} : IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie credits...</h1>}>
                <MovieCredits id={id} count={4} showAll={true}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}