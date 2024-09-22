import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/root";
import MoviePage from "./routes/movie";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/movie/:id",
            element: <MoviePage />,
        },
    ]);

    return (
        <div className="bg-gray-900 min-h-screen text-white p-4">
            <div className="container mx-auto max-w-7xl">
                <header className="text-center py-6">
                    <h1 className="text-4xl font-bold">Movie Library</h1>
                </header>
                <RouterProvider router={router} />
            </div>
        </div>
    );
};

export default App;
