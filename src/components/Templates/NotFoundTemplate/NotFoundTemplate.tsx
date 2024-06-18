import Footer from "../../Organisms/Footer/Footer";
import Header from "../../Organisms/Header/Header";
import { ReactNode } from "react";
import "./NotFoundTemplate.css";

interface NotFoundTemplateProps {
    children: ReactNode;
}

const NotFoundTemplate = ({ children }: NotFoundTemplateProps) => {
    return (
        <div className="NotFoundTemplate">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default NotFoundTemplate;
