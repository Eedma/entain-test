import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import {moviesApi} from "../features/moviesApi";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
