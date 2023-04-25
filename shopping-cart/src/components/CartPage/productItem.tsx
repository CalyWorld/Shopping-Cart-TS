import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { ProductItemContext } from "../Contexts/productItemContext";

export const ProductItem = () => {

    const { productItem, setProductItem } = useContext(ProductItemContext);

    const {setCartItems} = useContext(CartItemsContext);

    // type total = number;
    // type initialNumber = number;
    // useEffect(()=>{
        // setProductItem((eachProduct)=> eachProduct.map((eachProductItem)=> ({...eachProductItem,  amount: eachProductItem.quantity * eachProductItem.price })))
    // },[]);

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
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity + 1} : eachProductItem));
        //update the amount by getting the updated quantity to multiply price
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));
    }

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
    }) => {
        if (item.quantity === 1) {
            removeProductItem(item);
        } else {
        //decrement quantity by 1
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, quantity: eachProductItem.quantity - 1} : eachProductItem));
        //update the amount by getting the updated quantity to multiply price
        setProductItem((eachProduct) => eachProduct.map((eachProductItem) => eachProductItem.id === item.id ? { ...eachProductItem, amount: eachProductItem.quantity * eachProductItem.price } : eachProductItem));
        }
    }

    const removeProductItem = (item: {
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
    }) => {
        setProductItem((eachProductItem) => (
            eachProductItem.filter((eachProductItem) => eachProductItem.id !== item.id)
        ));
    }

    const emptyProductItemCart = () => {
        return (
            <div>
                <p>Cart selected is empty, go back to shopping</p>
            </div>)
    }

    return (
        productItem.length === 1 ? (
            <div className="flex flex-col m-10">
                <div className="flex justify-end mb-5">
                    <div>
                        <Link to="/Shop"><button type="button">Back Button</button></Link>
                    </div>
                </div>
                <div className="flex justify-end gap-8">
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
                <div>
                    {productItem.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div>
                                <img className="w-40 h-40" src={item.image} alt="productImage" />
                            </div>
                            <div id="title-container">
                                <p>{item.title}</p>
                            </div>
                            <div id="pqt-container" className="flex gap-10">
                                <div id="price-container">
                                    <p> ${item.price}</p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <div id="decrement-button">
                                        <button type="button" onClick={() => decrement(item)}>-</button>
                                    </div>
                                    <div>{item.quantity}</div>
                                    <div id="increment-button">
                                        <button type="button" onClick={() => increment(item)}>+</button>
                                    </div>
                                </div>
                                <div id="total-price-container">{item.amount}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="add-to-cart-btn" className="flex justify-end m-3">
                    {/* <button onClick={()=>{setCartItems(productItem)}}>Add to Cart</button> */}
                </div>
            </div>
        ) : emptyProductItemCart())

}