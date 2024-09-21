import React, {useEffect} from "react";
import {useAppSelector, useAppDispatch} from "../store/hooks";
import {
    useGetPopularMoviesQuery,
    useSearchMoviesQuery,
} from "../features/moviesApi";
import {setCurrentPage} from "../features/moviesSlice";
import Pagination from "./Pagination";

const MovieList: React.FC = () => {
    const dispatch = useAppDispatch();
    const {movies, currentPage, totalPages, searchQuery} = useAppSelector(
        (state) => state.movies
    );

    const {refetch: fetchPopularMovies} = useGetPopularMoviesQuery(
        currentPage,
        {skip: !!searchQuery}
    );
    const {refetch: fetchSearchResults} = useSearchMoviesQuery(
        {query: searchQuery, page: currentPage},
        {skip: !searchQuery}
    );

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    useEffect(() => {
        searchQuery ? fetchSearchResults() : fetchPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, searchQuery]);

    console.log("movies", movies);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                {searchQuery
                    ? `Results for "${searchQuery}"`
                    : "Popular Movies"}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {movies?.length > 0 ? (
                    movies.map((movie: any) => (
                        <div
                            key={movie.id}
                            className="bg-gray-800 p-4 rounded-lg"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-lg mb-4"
                            />
                            <h2 className="text-white text-lg">
                                {movie.title}
                            </h2>
                        </div>
                    ))
                ) : (
                    <p className="text-white">No movies found.</p>
                )}
            </div>

            <Pagination
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default MovieList;
