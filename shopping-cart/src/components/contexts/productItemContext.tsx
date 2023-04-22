import { createContext } from "react";

export const initalProductItem = {
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

export interface ProductItemCollection {
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

interface ProductItemContextType {
    productItem: ProductItemCollection[],
    setProductItem: React.Dispatch<React.SetStateAction<ProductItemCollection[]>>;
}

export const ProductItemContext = createContext<ProductItemContextType>({
    productItem: [initalProductItem],
    setProductItem: () => { }
});