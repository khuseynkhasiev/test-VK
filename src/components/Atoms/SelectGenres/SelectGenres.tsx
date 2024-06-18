import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./SelectGenres.css";
import { memo } from "react";

interface SelectGenresProps {
    selectedGenres: string[];
    handleGenreChange: (event: SelectChangeEvent<string[]>) => void;
}

const SelectGenres = memo(
    ({ selectedGenres, handleGenreChange }: SelectGenresProps) => {
        return (
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel
                        sx={{ color: "white" }}
                        id="demo-simple-select-label"
                    >
                        Жанр
                    </InputLabel>
                    <Select
                        sx={{ color: "white" }}
                        value={selectedGenres}
                        onChange={handleGenreChange}
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Жанр"
                    >
                        <MenuItem value="боевик">боевик</MenuItem>
                        <MenuItem value="комедия">комедия</MenuItem>
                        <MenuItem value="драма">драма</MenuItem>
                        <MenuItem value="фантастика">фантастика</MenuItem>
                        <MenuItem value="аниме">аниме</MenuItem>
                        <MenuItem value="мультфильм">мультфильм</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    }
);
export default SelectGenres;
