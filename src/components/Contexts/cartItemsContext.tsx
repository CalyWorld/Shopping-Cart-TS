import { createContext } from "react";
import { ShopCollection } from "./shopProductContext";

interface CartItemsContextType {
    cartItems: ShopCollection[],
    setCartItems: React.Dispatch<React.SetStateAction<ShopCollection[]>>;
}

export const CartItemsContext = createContext<CartItemsContextType>({
    cartItems: [],
    setCartItems: () => {}
});