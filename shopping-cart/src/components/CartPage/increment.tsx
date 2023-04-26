import { useContext } from "react"
import { ProductItemContext } from "../Contexts/productItemContext"
import { IncreDecrementProps } from "./productItemProps";
export const Increment = ({ item }: IncreDecrementProps) => {

    const { setProductItem } = useContext(ProductItemContext);
    const increment = (item: {
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
    }) => {

        //increment quantity by 1
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity + 1 } : eachProductItem));
        //update the amount by getting the updated quantity to multiply price
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));

    }

    return (
        <div>
            <button type="button" onClick={() => increment(item)}>+</button>
        </div>
    )
}