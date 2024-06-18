import Footer from "../../Organisms/Footer/Footer";
import Header from "../../Organisms/Header/Header";
import { ReactNode } from "react";
import "./FavoritesTemplate.css";

interface FavoritesTemplateProps {
    children: ReactNode;
}

const FavoritesTemplate = ({ children }: FavoritesTemplateProps) => {
    return (
        <div className="FavoritesTemplate">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FavoritesTemplate;
