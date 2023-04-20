import { createContext } from "react";

export let initialShopProduct = {
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

export interface ShopCollection {
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

interface ShopContextType {
    shopProducts: ShopCollection[],
    setShopProducts: React.Dispatch<React.SetStateAction<ShopCollection[]>>;
}


export const ShopContext = createContext<ShopContextType>({
    shopProducts: [initialShopProduct],
    setShopProducts: () => {}
});