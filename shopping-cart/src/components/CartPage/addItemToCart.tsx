import { Link } from "react-router-dom";
import { ProductCartProps } from "./ItemProps";
export const AddProductItemToCart = ({item,cartItems,setCartItems}:ProductCartProps) => {

    const addProductItemToCart = (item: {
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
    }, quantity: number, amount: number) => {
        if (cartItems.some((cartItem) => cartItem.id === item.id)) {
            setCartItems((cartItems) => cartItems.map((eachCartItem) => eachCartItem.id === item.id ? { ...eachCartItem, quantity: eachCartItem.quantity + quantity, amount: eachCartItem.amount + amount } : eachCartItem));
        } else {
            setCartItems((cartItems) => [...cartItems, item])
        }
    }
    return (
        <div id="add-to-cart-btn" className="flex justify-end">
            <Link to="/Shop"><button onClick={() => { addProductItemToCart(item, item.quantity, item.amount) }}>Add to Cart</button></Link>
        </div>
    )

}