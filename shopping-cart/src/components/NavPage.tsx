import React from "react";
import { Link } from "react-router-dom";
export const NavPage = () =>{
    return (
        <div className="flex justify-around">
            <ul>
                <Link to="/"><li>Logo</li></Link>
            </ul>
            <ul className="flex gap-6">
                <Link to="/Shop"><li>Shop</li></Link>
                <Link to="/Cart"><li>Cart</li></Link>
                <Link to="/Contact">Contact</Link>
            </ul>
        </div>
    );
}