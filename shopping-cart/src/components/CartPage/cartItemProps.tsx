import { ShopCollection } from "../Contexts/shopProductContext"

export interface CartItemsProps {
    item:{
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
    },
    cartItems:ShopCollection[],
    setCartItems:React.Dispatch<React.SetStateAction<ShopCollection[]>>
}