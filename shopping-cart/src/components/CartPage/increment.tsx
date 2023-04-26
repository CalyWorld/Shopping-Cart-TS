import { ProductCartProps } from "./ItemProps";
export const Increment = ({ item, setProductItem, incrementItem, setCartItems }: ProductCartProps) => {

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

        if (incrementItem === "increment-product-item") {
            //increment quantity by 1
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity + 1 } : eachProductItem));
            //update the amount by getting the updated quantity to multiply price
            setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));
        }
        else if (incrementItem === "increment-cart-item") {
            //increment quantity by 1
            setCartItems((eachCart) => eachCart.map((eachCartItem) => eachCartItem.id === item.id ? { ...eachCartItem, quantity: eachCartItem.quantity + 1 } : eachCartItem));
            //update the amount by getting the updated quantity to multiply price
            setCartItems((eachCart) => eachCart.map((eachCartItem) => eachCartItem.id === item.id ? { ...eachCartItem, amount: eachCartItem.quantity * eachCartItem.price } : eachCartItem));
        }
    }

    return (
        <div>
            <button type="button" onClick={() => increment(item)}>+</button>
        </div>
    )
}