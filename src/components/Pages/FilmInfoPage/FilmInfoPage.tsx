import { useParams } from "react-router-dom";
import FilmInfoTemplate from "../../Templates/FilmInfoTemplate/FilmInfoTemplate";
import "./FilmInfoPage.css";
import { useEffect, useState } from "react";
import * as api from "../../../api/api";
import { IMovie } from "../../../interfaces/data";
import CircularIndeterminate from "../../Atoms/Preloader/CircularIndeterminate";
function FilmInfoPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<IMovie>();

    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        setIsLoading(true);
        if (id) {
            api.getMovieId(id)
                .then((data) => {
                    setMovie(data.docs[0]);
                })
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false));
        }
    }, [id]);
    return (
        <FilmInfoTemplate>
            <section className="FilmInfoPage">
                {isLoading ? (
                    <CircularIndeterminate />
                ) : (
                    <>
                        {movie?.poster?.url && (
                            <img
                                className="FilmInfoPage__poster"
                                src={movie.poster.url}
                                alt={movie.name || ""}
                            />
                        )}{" "}
                        <h1>Название: {movie?.name}</h1>
                        <p>Описание: {movie?.description}</p>
                        <p>Дата выхода: {movie?.year}</p>
                        <p>Рейтинг: {movie?.rating.imdb}</p>
                        <ol>
                            <p>Список жанров:</p>
                            {movie?.genres.map((genre, index) => (
                                <li
                                    className="FilmInfoPage__genre-item"
                                    key={index}
                                >
                                    {genre.name}
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </section>
        </FilmInfoTemplate>
    );
}

export default FilmInfoPage;
