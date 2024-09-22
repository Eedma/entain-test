import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../store/hooks";
import {setSearchQuery} from "../features/moviesSlice";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setSearchQuery(query));
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [query, dispatch]);

    return (
        <div className="mb-6">
            <input
                type="text"
                className="w-full p-2 rounded-lg text-black"
                placeholder="Search for movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
