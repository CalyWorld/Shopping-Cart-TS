import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { Link } from "react-router-dom";
import { emptyProductItemCart } from "./emptyProductCart";
export const CartPage = () => {

    const { cartItems } = useContext(CartItemsContext);

    console.log(cartItems);
    return (
        cartItems.length === 1 ? (
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
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div>
                                <img className="w-40 h-40" src={item.image} alt="productImage" />
                            </div>
                            <div id="title-container">
                                <p>{item.title}</p>
                            </div>
                            <div id="pqt-add-to-cart-btn-holder" className="flex flex-col gap-2">
                                <div id="pqt-container" className="flex gap-10">
                                    <div id="price-container">
                                        <p> ${item.price}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <div id="decrement-button">
                                            <button type="button">-</button>
                                        </div>
                                        <div>{item.quantity}</div>
                                        <div id="increment-button">
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                    <div id="total-price-container">{item.amount}</div>
                                </div>
                                <div id="add-to-cart-btn" className="flex justify-end">
                                    <Link to="/Shop"><button>Add to Cart</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : emptyProductItemCart())
}