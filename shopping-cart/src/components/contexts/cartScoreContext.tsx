import { createContext } from "react";

export interface CartScoreContextType{
    cartScore:Number,
    setCartScore: React.Dispatch<React.SetStateAction<number>>;
}

export const CartScoreContext = createContext<CartScoreContextType>({
    cartScore:0,
    setCartScore: ()=>{}
})