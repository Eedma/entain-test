import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:6060/api/"}),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => "movies",
        }),
        searchMovies: builder.query({
            query: (title: string) => `movies/search?title=${title}`,
        }),
    }),
});

export const {useGetMoviesQuery, useSearchMoviesQuery} = moviesApi;
