import { createContext } from "react";
import { initialShopProduct } from "./shopProductContext";
import { ShopCollection } from "./shopProductContext";

interface ProductItemContextType {
    productItem: ShopCollection[],
    setProductItem: React.Dispatch<React.SetStateAction<ShopCollection[]>>;
}

export const ProductItemContext = createContext<ProductItemContextType>({
    productItem: [initialShopProduct],
    setProductItem: () => { }
});