import Footer from "../../Organisms/Footer/Footer";
import Header from "../../Organisms/Header/Header";
import { ReactNode } from "react";
import "./FilmInfoTemplate.css";
interface FilmInfoTemplate {
    children: ReactNode;
}
const FilmInfoTemplate = ({ children }: FilmInfoTemplate) => {
    return (
        <div className="FilmInfoTemplate">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FilmInfoTemplate;
