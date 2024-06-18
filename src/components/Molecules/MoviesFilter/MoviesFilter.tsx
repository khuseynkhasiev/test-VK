import React, { memo, useState, useEffect, useCallback } from "react";
import "./MoviesFilter.css";
import SelectGenres from "../../Atoms/SelectGenres/SelectGenres";
import { SelectChangeEvent } from "@mui/material";

interface MovieFilterProps {
    onFilterChange: (filters: {
        genres: string[];
        rating: [number, number];
        year: [number, number];
    }) => void;
}

const MoviesFilter = memo(({ onFilterChange }: MovieFilterProps) => {
    const initialRatingRange: [number, number] = [0, 10];
    const initialYearRange: [number, number] = [1900, new Date().getFullYear()];

    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [ratingRange, setRatingRange] =
        useState<[number, number]>(initialRatingRange);
    const [yearRange, setYearRange] =
        useState<[number, number]>(initialYearRange);

    const [tempRatingRange, setTempRatingRange] = useState<[string, string]>([
        "0",
        "10",
    ]);
    const [tempYearRange, setTempYearRange] = useState<[string, string]>([
        "1900",
        new Date().getFullYear().toString(),
    ]);

    useEffect(() => {
        setTempRatingRange([
            ratingRange[0].toString(),
            ratingRange[1].toString(),
        ]);
    }, [ratingRange]);

    useEffect(() => {
        setTempYearRange([yearRange[0].toString(), yearRange[1].toString()]);
    }, [yearRange]);

    const handleGenreChange = useCallback(
        (event: SelectChangeEvent<string[]>) => {
            setSelectedGenres([...event.target.value]);
        },
        []
    );

    const handleRatingChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = event.target.value;
        const newTempRatingRange = [...tempRatingRange] as [string, string];
        newTempRatingRange[index] = value;
        setTempRatingRange(newTempRatingRange);

        if (value === "") {
            return;
        }

        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 10) {
            const newRatingRange = [...ratingRange] as [number, number];
            newRatingRange[index] = parsedValue;
            setRatingRange(newRatingRange);
        }
    };

    const handleYearChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = event.target.value;
        const newTempYearRange = [...tempYearRange] as [string, string];
        newTempYearRange[index] = value;
        setTempYearRange(newTempYearRange);

        if (value === "") {
            return;
        }

        const parsedValue = parseInt(value, 10);
        if (
            !isNaN(parsedValue) &&
            parsedValue >= 1900 &&
            parsedValue <= new Date().getFullYear()
        ) {
            const newYearRange = [...yearRange] as [number, number];
            newYearRange[index] = parsedValue;
            setYearRange(newYearRange);
        }
    };

    const handleReset = () => {
        setSelectedGenres([]);
        setRatingRange(initialRatingRange);
        setYearRange(initialYearRange);
    };

    const handleSearch = () => {
        onFilterChange({
            genres: selectedGenres,
            rating: ratingRange,
            year: yearRange,
        });
    };

    return (
        <div className="MoviesFilter">
            <label>
                Год:
                <input
                    type="number"
                    value={tempYearRange[0]}
                    onChange={(e) => handleYearChange(e, 0)}
                    min={1900}
                    max={new Date().getFullYear()}
                />
                -
                <input
                    type="number"
                    value={tempYearRange[1]}
                    onChange={(e) => handleYearChange(e, 1)}
                    min={1900}
                    max={new Date().getFullYear()}
                />
            </label>
            <label>
                Рейтинг IMDB:
                <input
                    type="number"
                    value={tempRatingRange[0]}
                    onChange={(e) => handleRatingChange(e, 0)}
                    min={0}
                    max={10}
                />
                -
                <input
                    type="number"
                    value={tempRatingRange[1]}
                    onChange={(e) => handleRatingChange(e, 1)}
                    min={0}
                    max={10}
                />
            </label>
            <SelectGenres
                selectedGenres={selectedGenres}
                handleGenreChange={handleGenreChange}
            />
            <button className="MoviesFilter__btn" onClick={handleSearch}>
                Поиск
            </button>
            <button className="MoviesFilter__btn" onClick={handleReset}>
                Сброс
            </button>
        </div>
    );
});

export default MoviesFilter;
