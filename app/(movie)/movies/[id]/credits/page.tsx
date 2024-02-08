import { Suspense } from "react";
import MovieCredits from "../../../../../components/MovieTopCredits";

export default function Credits({params: {id}} : {params: {id: string}}) {
    return (
        <Suspense fallback={<h1>Loading movie credits...</h1>}>
            <MovieCredits id={id} />
        </Suspense>
    )
}