import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="Footer">
            <Link
                to="https://github.com/khuseynkhasiev"
                className="Footer__text"
            >
                2024 @khuseyn-khasiev
            </Link>
        </footer>
    );
};

export default Footer;
