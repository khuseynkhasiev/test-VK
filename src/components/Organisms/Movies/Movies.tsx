import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import CircularIndeterminate from "../../Atoms/Preloader/CircularIndeterminate";
import MovieCard from "../../Molecules/MovieCard/MovieCard";
import "./Movies.css";
import { IMovie } from "../../../interfaces/data";
import { memo } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

interface FilmsProps {
    isLoading: boolean;
    movies: IMovie[];
}

const Movies = memo(({ isLoading, movies }: FilmsProps) => {
    return (
        <>
            <section className="Movies">
                {isLoading ? (
                    <CircularIndeterminate />
                ) : (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {movies.map((movie) => (
                                <Grid item xs={2} sm={4} md={4} key={movie.id}>
                                    <Item>
                                        <MovieCard movie={movie} />
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </section>
        </>
    );
});

export default Movies;
