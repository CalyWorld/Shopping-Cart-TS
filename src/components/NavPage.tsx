import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartScoreContext } from "./Contexts/cartScoreContext";
import { ThemeContext } from "./Contexts/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from "/Users/cal/ReactProjects/Shopping-Cart-TS/src/assets/Logo.jpg"

export const NavPage = () => {
    const { cartScore } = useContext(CartScoreContext);
    const { theme, setTheme } = useContext(ThemeContext);

    //change background color when theme is true
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (body) {
            if (theme) {
                body.classList.add('black-background');
            } else {
                body.classList.remove('black-background');
            }
        }
    }, [theme]);

    return (
        <div className="flex items-center justify-between ml-3 mr-3 h-full p-2">
            <ul>
                <Link to="/">
                    <li>
                        <img src={logo} alt="logo-pic" className="w-10 h-full" />
                    </li>
                </Link>
            </ul>
            <ul className="flex gap-5">
                <li className="flex gap-8">
                    <Link to="/Shop">
                        <div>Shop</div>
                    </Link>
                    <Link to="/Cart">
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>{`${cartScore}`}</span>
                        </div>
                    </Link>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <button type="button" onClick={() => { setTheme(!theme) }}>
                        <FontAwesomeIcon icon={faLightbulb} />
                    </button>
                </li>
            </ul>
        </div>
    );
}
