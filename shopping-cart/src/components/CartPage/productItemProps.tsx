import { ShopCollection } from "../Contexts/shopProductContext"
export interface IncreDecrementProps {
    item: {
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
        amount: number,
        quantity: number
    }
    setProductItem: React.Dispatch<React.SetStateAction<ShopCollection[]>>
}