import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

type PaginationProps = {
    handlePageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
};

export default function Pagination({
    handlePageChange,
    currentPage,
    totalPages,
}: PaginationProps) {
    const elmentsPage = 20;
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg m-4">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">
                            {elmentsPage * currentPage - 19}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium">
                            {elmentsPage * currentPage}
                        </span>{" "}
                        of <span className="font-medium">{totalPages}</span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                        <button
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        </button>

                        {Array.from(
                            {length: Math.min(totalPages, 7)},
                            (_, index) => {
                                const pageNumber = currentPage - 3 + index;
                                if (pageNumber < 1 || pageNumber > totalPages)
                                    return null; // Skip out-of-bounds pages
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() =>
                                            handlePageChange(pageNumber)
                                        }
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                            pageNumber === currentPage
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        }`}
                                        aria-current={
                                            pageNumber === currentPage
                                                ? "page"
                                                : undefined
                                        }
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            }
                        )}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage >= totalPages}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
