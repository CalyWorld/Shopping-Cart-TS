import { ReactNode } from "react"

type HeaderProps = {
    children :ReactNode;
};

export const Header = ({children}:HeaderProps) =>{

    return (
        <div>
            <header>
            {children}
            </header>
        </div>
    )
}