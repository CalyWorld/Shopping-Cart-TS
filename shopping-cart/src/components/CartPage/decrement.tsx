import { removeProductItem } from "./removeItemFromCart";
import { IncreDecrementProps } from "./productItemProps";
import { ShopCollection } from "../Contexts/shopProductContext";
export const Decrement = ({item, setProductItem}:IncreDecrementProps) => {


    const decrement = (item: {
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
    }, setProductItem:React.Dispatch<React.SetStateAction<ShopCollection[]>>) => {
        if (item.quantity === 1) {
            removeProductItem(item, setProductItem);
        } else {
            //decrement quantity by 1
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity - 1 } : eachProductItem));
            //update the amount by getting the updated quantity to multiply price
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));
        }
    }
    return (
        <div>
            <button type="button" onClick={() => decrement(item, setProductItem)}>-</button>
        </div>
    )
}