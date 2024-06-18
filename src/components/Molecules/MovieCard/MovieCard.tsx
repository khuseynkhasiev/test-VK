import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMovie } from "../../../interfaces/data";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import FavoriteToogleButton from "../../Atoms/FavoriteToogleButton/FavoriteToogleButton";

export default function MovieCard({ movie }: { movie: IMovie }) {
    const { poster, name, rating, year, id } = movie;

    const renderPoster = () => {
        if (poster) {
            return (
                <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="140"
                    image={poster.previewUrl}
                    alt={name || ""}
                />
            );
        }
        return <div style={{ height: "140px" }}></div>;
    };

    return (
        <Card sx={{ position: "relative" }}>
            <FavoriteToogleButton movie={movie} />
            <Link to={`/film-info/${id}`}>
                <CardActionArea sx={{ padding: "10px" }}>
                    {renderPoster()}
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ mb: 1.5 }}
                            component="h3"
                        >
                            {name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            sx={{ mb: 1.5 }}
                            component="p"
                        >
                            Год выпуска: {year}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Рейтинг IBM: {rating.imdb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}
