import {useGetMoviesQuery} from "../features/moviesApi";

const MovieList = () => {
    const {data: movies, error, isLoading} = useGetMoviesQuery(null);

    if (isLoading) return <p>Loading...</p>;
    if (error) console.log("error", error);

    console.log("error", error);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movies?.map((movie: any) => (
                <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-white text-lg">{movie.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
