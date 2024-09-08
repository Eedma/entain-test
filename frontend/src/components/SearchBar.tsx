import React, {useState} from "react";
import {useSearchMoviesQuery} from "../features/moviesApi";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {
        data: movies,
        error,
        isLoading,
    } = useSearchMoviesQuery(searchTerm, {
        skip: !searchTerm,
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for a movie..."
                className="w-full p-2 rounded-lg text-black"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading movies.</p>}
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
        </div>
    );
};

export default SearchBar;
