import Movies from "../../Organisms/Movies/Movies";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import "./MainPage.css";
import { useState, useEffect, useCallback } from "react";
import * as api from "../../../api/api";
import { IMovieResponse } from "../../../interfaces/data";
import PaginationOutlined from "../../Molecules/Pagination/Pagination";
import MoviesFilter from "../../Molecules/MoviesFilter/MoviesFilter";

const initialMovieResponse: IMovieResponse = {
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0,
};
function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<IMovieResponse>(initialMovieResponse);
    const [notNullFields, setNotNullFields] = useState<string[]>([
        "id",
        "name",
        "year",
        "rating.imdb",
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        genres: [] as string[],
        rating: [0, 10] as [number, number],
        year: [1900, new Date().getFullYear()] as [number, number],
    });
    const limit = 50;

    const fetchMovies = async (page: number) => {
        setIsLoading(true);
        try {
            const data = await api.getMovies(
                limit,
                page,
                notNullFields,
                filters
            );
            setMovies({
                docs: data.docs,
                limit: data.limit,
                page: data.page,
                pages: data.pages,
                total: data.total,
            });
            setCurrentPage(data.page);
            setTotalPages(data.pages);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage, filters]);

    const handleFilterChange = useCallback(
        (newFilters: typeof filters) => {
            setFilters(newFilters);
            setCurrentPage(1);
        },
        [currentPage, filters]
    );
    return (
        <MainTemplate>
            <main className="MainPage">
                <div>
                    <h1 className="MainPage__title">Список фильмов</h1>
                    <MoviesFilter onFilterChange={handleFilterChange} />

                    <Movies isLoading={isLoading} movies={movies.docs} />
                </div>
                <PaginationOutlined
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </main>
        </MainTemplate>
    );
}

export default MainPage;
