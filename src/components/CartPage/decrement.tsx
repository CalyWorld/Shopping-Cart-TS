import { removeProductItem } from "./removeItemFromCart";
import { ProductCartProps } from "./ItemProps";
import { ShopCollection } from "../Contexts/shopProductContext";
import { useContext } from "react";
import { CartScoreContext } from "../Contexts/cartScoreContext";
export const Decrement = ({ item, setProductItem, setCartItems, decrementItem }: ProductCartProps) => {

    const { setCartScore } = useContext(CartScoreContext);
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
    }, setProductItem: React.Dispatch<React.SetStateAction<ShopCollection[]>>) => {
        if (item.quantity === 1) {
            removeProductItem(item, decrementItem, setProductItem, setCartItems,  setCartScore);
        } else if (decrementItem === "decrement-product-item") {
            //decrement product item quantity by 1
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity - 1 } : eachProductItem));
            //update the amount by getting the updated product item quantity to multiply price
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));
        } else if (decrementItem === "decrement-cart-item") {
            //decrement cart item quantity by 1
            setCartItems((eachCartItem) => eachCartItem.map((eachCartItemProduct) => eachCartItemProduct.id === item.id ? { ...eachCartItemProduct, quantity: eachCartItemProduct.quantity - 1 } : eachCartItemProduct));
            //update the amount by getting updated cart item quantity to multiply by price
            setCartItems((eachProduct) => eachProduct.map((eachCartItemProduct) => eachCartItemProduct.id === item.id ? { ...eachCartItemProduct, amount: eachCartItemProduct.quantity * eachCartItemProduct.price } : eachCartItemProduct));
        }
    }
    return (
        <div>
            <button type="button" onClick={() => decrement(item, setProductItem)}>-</button>
        </div>
    )
}