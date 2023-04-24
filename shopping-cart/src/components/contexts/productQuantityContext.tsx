import { createContext } from "react";


export const initialProductQuantity = 1;

export type productQuantity = number;

interface ProductQuantityContextType {
    productQuantity: productQuantity,
    setProductQuantity: React.Dispatch<React.SetStateAction<productQuantity>>;
}

export const ProductQuantityContext = createContext<ProductQuantityContextType>({
    productQuantity: initialProductQuantity,
    setProductQuantity: () => { }
})