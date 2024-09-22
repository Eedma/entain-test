import {Link, useParams} from "react-router-dom";
import {useGetMovieDetailQuery} from "../features/moviesApi";

export default function MoviePage() {
    const {id = ""} = useParams<{id: string}>();

    const {data: movie, isLoading, isError, error} = useGetMovieDetailQuery(id);

    console.log("error", error);
    if (isLoading) return <div>Loading movie details...</div>;
    if (isError) return <div>Error loading movie details</div>;

    return (
        <div className="container mx-auto p-6 text-black">
            <button className="bg-white px-4 py-2 rounded-full text-sm my-4">
                <Link to="/">return home</Link>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="lg:col-span-2 bg-white rounded-lg p-4">
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

                    <div className="flex flex-wrap gap-4 mb-4">
                        {movie.genres.map((genre: any) => (
                            <span
                                key={genre.id}
                                className="bg-blue-600 px-2 py-1 rounded-full text-sm text-white"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-700 mb-4">{movie.overview}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="font-semibold">Release Date:</p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Runtime:</p>
                            <p>{movie.runtime} minutes</p>
                        </div>
                        <div>
                            <p className="font-semibold">Rating:</p>
                            <p>{movie.vote_average}/10</p>
                        </div>
                        <div>
                            <p className="font-semibold">Votes:</p>
                            <p>{movie.vote_count}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="font-semibold">Budget:</p>
                            <p>${movie.budget.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Revenue:</p>
                            <p>${movie.revenue.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-4">
                <h2 className="text-3xl font-bold mb-4">
                    Additional Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="font-semibold">Original Language:</p>
                        <p>{movie.original_language.toUpperCase()}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Tagline:</p>
                        <p>{movie.tagline || "N/A"}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Production Companies:</p>
                        <div className="flex gap-10 m-4">
                            {movie.production_companies.map((company: any) => (
                                <div
                                    key={company.id}
                                    className="flex flex-col items-center"
                                >
                                    {company.logo_path && (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                            alt={company.name}
                                            className="object-cover h-12 mr-2"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Production Countries:</p>
                        <ul className="list-disc ml-6">
                            {movie.production_countries.map((country: any) => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
