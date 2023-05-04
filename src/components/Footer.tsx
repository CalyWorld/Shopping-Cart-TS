import { useContext } from "react";
import { FaTrademark } from "react-icons/fa";
import { ThemeContext } from "./Contexts/themeContext";
export const Footer = () => {

    const {theme} = useContext(ThemeContext);
    return (
        <div className={`flex justify-center items-center p-2 ${theme ? "bg-dark-mode-header text-whiteTextColor" : ""}`}>
            <p>Made by Callistus Anizoba</p>
            <FaTrademark />
        </div>
    )
}