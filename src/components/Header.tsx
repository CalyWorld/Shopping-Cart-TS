import { ReactNode, useContext } from "react"
import { ThemeContext } from "./Contexts/themeContext";

type HeaderProps = {
    children :ReactNode;
};

export const Header = ({children}:HeaderProps) =>{

    const {theme} = useContext(ThemeContext);
    return (
        <div className={`${theme ? "bg-dark-mode-header text-whiteTextColor" : ""}`}>
            <header>
            {children}
            </header>
        </div>
    )
}