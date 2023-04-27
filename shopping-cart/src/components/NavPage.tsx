import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartScoreContext } from "./Contexts/cartScoreContext";
export const NavPage = () => {
    const { cartScore } = useContext(CartScoreContext);
    return (
        <div className="flex justify-between ml-3 mr-3">
            <ul>
                <Link to="/"><li>Logo</li></Link>
            </ul>
            <ul className="flex gap-6">
                <li className="flex gap-2">
                    <Link to="/Shop">
                        <div>Shop</div>
                    </Link>
                    <Link to="/Cart">
                        <div className="flex">
                            Cart
                            <span>
                                {`${cartScore}`}
                            </span>
                        </div>
                    </Link>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <button type="button">theme</button>
                </li>
            </ul>
        </div>
    );
} 
