import { ShopCollection } from "../Contexts/shopProductContext";

export const removeProductItem = (item: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: string,
        count: number
    },
    amount: number
}, setProductItem:React.Dispatch<React.SetStateAction<ShopCollection[]>>) => {

    setProductItem((eachProductItem) => (
        eachProductItem.filter((eachProductItem) => eachProductItem.id !== item.id)
    ));
}