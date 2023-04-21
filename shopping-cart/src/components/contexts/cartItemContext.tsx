import { createContext } from "react";

export const initalCartItemProduct = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: "",
        count: 0
    }
}

export interface CartItemCollection {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: string,
        count: number
    }
}

interface CartItemContextType {
    cartItem: CartItemCollection[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemCollection[]>>;
}

export const CartItemContext = createContext<CartItemContextType>({
    cartItem: [initalCartItemProduct],
    setCartItem: () => { }
});