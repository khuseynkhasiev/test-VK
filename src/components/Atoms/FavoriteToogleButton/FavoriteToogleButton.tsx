import { IMovie } from "../../../interfaces/data";
import "./FavoriteToogleButton.css";
import { useState, useEffect, memo } from "react";

const FavoriteToogleButton = memo(({ movie }: { movie: IMovie }) => {
    const { id } = movie;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const moviesLocalStorage = localStorage.getItem("favoriteMovies");
        if (moviesLocalStorage) {
            const favoriteMovies: IMovie[] = JSON.parse(moviesLocalStorage);
            setIsFavorite(
                favoriteMovies.some((favMovie) => favMovie.id === id)
            );
        }
    }, [id]);

    const toggleFavoriteMovies = (): void => {
        const moviesLocalStorage = localStorage.getItem("favoriteMovies");
        if (moviesLocalStorage) {
            const favoriteMovies: IMovie[] = JSON.parse(moviesLocalStorage);

            if (favoriteMovies.some((favMovie) => favMovie.id === id)) {
                const newFavoriteMovies = favoriteMovies.filter(
                    (favMovie) => favMovie.id !== id
                );
                localStorage.setItem(
                    "favoriteMovies",
                    JSON.stringify(newFavoriteMovies)
                );
                setIsFavorite(false);
            } else {
                const newFavoriteMovies = [movie, ...favoriteMovies];
                localStorage.setItem(
                    "favoriteMovies",
                    JSON.stringify(newFavoriteMovies)
                );
                setIsFavorite(true);
            }
        } else {
            localStorage.setItem("favoriteMovies", JSON.stringify([movie]));
            setIsFavorite(true);
        }
    };
    return (
        <button
            onClick={toggleFavoriteMovies}
            aria-label="add to favorites"
            className={`FavoriteToogleButton__image ${
                isFavorite
                    ? "FavoriteToogleButton__image_active"
                    : "FavoriteToogleButton__image_no-active"
            }`}
        />
    );
});

export default FavoriteToogleButton;
