import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setMovies, setTotalPages, setCurrentPage} from "./moviesSlice";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:6060/api/"}),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: (page = 1) => `movies/popular?page=${page}`,
            async onQueryStarted(page, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    console.log("popular movies result", data.results);
                    dispatch(setMovies(data.results));
                    dispatch(setTotalPages(data.total_pages));
                    dispatch(setCurrentPage(page));
                } catch (err) {
                    console.error("Error fetching popular movies: ", err);
                }
            },
        }),
        searchMovies: builder.query({
            query: ({query, page = 1}) =>
                `movies/search?title=${query}&page=${page}`,
            async onQueryStarted({query, page}, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    console.log("searched movies result", data.results);
                    dispatch(setMovies(data.results));
                    dispatch(setTotalPages(data.total_pages));
                    dispatch(setCurrentPage(page));
                } catch (err) {
                    console.error("Error searching movies: ", err);
                }
            },
        }),
        getMovieDetail: builder.query({
            query: (id: string) => `movie/${id}`,
        }),
    }),
});

export const {
    useGetPopularMoviesQuery,
    useSearchMoviesQuery,
    useGetMovieDetailQuery,
} = moviesApi;
