import Footer from "../../Organisms/Footer/Footer";
import Header from "../../Organisms/Header/Header";
import { ReactNode } from "react";
import "./MainTemplate.css";
interface MainTemplateProps {
    children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <div className="MainTemplate">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainTemplate;
