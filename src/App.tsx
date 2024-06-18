import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import FavoritesPage from "./components/Pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";
import FilmInfoPage from "./components/Pages/FilmInfoPage/FilmInfoPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/film-info/:id" element={<FilmInfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
