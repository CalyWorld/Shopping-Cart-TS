import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { Link } from "react-router-dom";
import { emptyProductItemCart } from "./emptyProductCart";
import { Decrement } from "./decrement";
import { Increment } from "./increment";
import { ProductItemContext } from "../Contexts/productItemContext";
import { removeProductItem } from "./removeItemFromCart";
import { CartScoreContext } from "../Contexts/cartScoreContext";
export const CartPage = () => {

    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const { setProductItem } = useContext(ProductItemContext);
    const { setCartScore} = useContext(CartScoreContext);

    let initialValue: number = 0;
    let total: number;

    let incrementItem: string = "increment-cart-item";
    let decrementItem: string = "decrement-cart-item";


    total = Math.floor(cartItems.reduce((prev, next) => prev + next.amount, initialValue));

    return (
        cartItems.length > 0 ? (
            <div className="flex flex-col m-3">
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
                <div className="flex flex-col gap-2">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div>
                                <img className="w-40 h-40" src={item.image} alt="productImage" />
                            </div>
                            <div id="title-container" className="flex flex-col justify-start gap-3">
                                <p>{item.title}</p>
                                <button type="button" onClick={()=>{removeProductItem(item, decrementItem, setCartItems, setProductItem, setCartScore)}}>Remove item</button>
                            </div>
                            <div id="pqt-add-to-cart-btn-holder" className="flex flex-col gap-2">
                                <div id="pqt-container" className="flex gap-10">
                                    <div id="price-container">
                                        <p> ${item.price}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <div id="decrement-button">
                                            <Decrement item={item} incrementItem={incrementItem} decrementItem={decrementItem} cartItems={cartItems} setProductItem={setProductItem} setCartItems={setCartItems} />
                                        </div>
                                        <div>{item.quantity}</div>
                                        <div id="increment-button">
                                            <Increment item={item} incrementItem={incrementItem} decrementItem={decrementItem} cartItems={cartItems} setProductItem={setProductItem} setCartItems={setCartItems} />
                                        </div>
                                    </div>
                                    <div id="total-price-container">{item.amount}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end gap-3">
                        <div>
                            <p>${total}</p>
                        </div>
                        <div id="checkout-button">Check-out</div>
                    </div>
                </div>
            </div>
        ) : emptyProductItemCart())
}