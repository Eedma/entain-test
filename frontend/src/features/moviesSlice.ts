import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MovieState {
    movies: any[];
    totalPages: number;
    currentPage: number;
    searchQuery: string;
}

const initialState: MovieState = {
    movies: [],
    totalPages: 0,
    currentPage: 1,
    searchQuery: "",
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<any[]>) => {
            state.movies = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const {setMovies, setTotalPages, setCurrentPage, setSearchQuery} =
    moviesSlice.actions;

export default moviesSlice.reducer;
