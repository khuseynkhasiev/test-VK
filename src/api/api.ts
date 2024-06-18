const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = (
    limit: number,
    page: number,
    notNullFields: string[],
    filters: {
        genres: string[];
        rating: [number, number];
        year: [number, number];
    }
) => {
    const url = new URL(`${BASE_URL}/v1.4/movie`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    notNullFields.forEach((field) => {
        url.searchParams.append("notNullFields", field);
    });
    if (filters.genres.length > 0) {
        filters.genres.forEach((genre) => {
            url.searchParams.append("genres.name", genre);
        });
    }
    url.searchParams.append(
        "rating.imdb",
        `${filters.rating[0]}-${filters.rating[1]}`
    );
    url.searchParams.append("year", `${filters.year[0]}-${filters.year[1]}`);

    return fetch(url.toString(), {
        headers: {
            "X-API-KEY": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => getResponse(response))
        .then((data) => data);
};

export const getMovieId = (id: string) => {
    const url = new URL(`${BASE_URL}/v1.4/movie`);
    url.searchParams.append("id", id);

    return fetch(url.toString(), {
        headers: {
            "X-API-KEY": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => getResponse(response))
        .then((data) => data);
};
