import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="container mx-auto max-w-7xl">
                <header className="text-center py-6">
                    <h1 className="text-4xl font-bold">Movie Library</h1>
                </header>
                <SearchBar />
                <MovieList />
            </div>
        </div>
    );
}

export default App;
