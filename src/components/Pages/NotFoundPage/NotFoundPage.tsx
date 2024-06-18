import NotFoundTemplate from "../../Templates/NotFoundTemplate/NotFoundTemplate";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <NotFoundTemplate>
            <section className="NotFoundPage">
                <h1>Такой страницы не существует</h1>
            </section>
        </NotFoundTemplate>
    );
};

export default NotFoundPage;
