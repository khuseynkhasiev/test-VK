import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <nav className="Menu">
            <ul className="Menu__items">
                <li className="Menu__item">
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "Menu__link Menu__link_active"
                                : "Menu__link"
                        }
                        to="/"
                    >
                        Фильмы
                    </NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "Menu__link Menu__link_active"
                                : "Menu__link"
                        }
                        to="/favorites"
                    >
                        Избранное
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
