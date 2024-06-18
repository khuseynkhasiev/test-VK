import { IMovie } from "../../../interfaces/data";
import CircularIndeterminate from "../../Atoms/Preloader/CircularIndeterminate";
import Films from "../../Organisms/Movies/Movies";
import FavoritesTemplate from "../../Templates/FavoritesTemplate/FavoritesTemplate";
import "./FavoritesPage.css";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
    const [favoriteMovies, setFavoritesMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getFavoriteMovies = () => {
        setIsLoading(true);
        const favoriteMoviesLocalStorage =
            localStorage.getItem("favoriteMovies");

        if (favoriteMoviesLocalStorage) {
            setFavoritesMovies(JSON.parse(favoriteMoviesLocalStorage));
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getFavoriteMovies();
    }, []);

    return (
        <FavoritesTemplate>
            <section className="FavoritesPage">
                <h1 className="FavoritesPage__title">Избранное</h1>
                {isLoading ? (
                    <CircularIndeterminate />
                ) : favoriteMovies.length === 0 ? (
                    <p className="FavoritesPage__text">
                        Пока вы ничего не добавили в избранное
                    </p>
                ) : (
                    <Films isLoading={isLoading} movies={favoriteMovies} />
                )}
            </section>
        </FavoritesTemplate>
    );
};

export default FavoritesPage;
