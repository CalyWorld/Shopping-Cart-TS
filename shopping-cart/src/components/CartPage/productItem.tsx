import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { ProductItemContext } from "../Contexts/productItemContext";
import { emptyProductItemCart } from "./emptyProductCart";
import { Decrement } from "./decrement";
import { AddProductItemToCart } from "./addItemToCart";
import { Increment } from "./increment";
export const ProductItem = () => {

    const { productItem, setProductItem } = useContext(ProductItemContext);

    const { cartItems, setCartItems } = useContext(CartItemsContext);



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
                            <div id="pqt-add-to-cart-btn-holder" className="flex flex-col gap-2">
                                <div id="pqt-container" className="flex gap-10">
                                    <div id="price-container">
                                        <p> ${item.price}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <div id="decrement-button">
                                            <Decrement item={item} setProductItem={setProductItem} />
                                        </div>
                                        <div>{item.quantity}</div>
                                        <div id="increment-button"> <Increment item={item} setProductItem={setProductItem} /></div>
                                    </div>
                                    <div id="total-price-container">{item.amount}</div>
                                </div>
                                <AddProductItemToCart item={item} cartItems={cartItems} setCartItems={setCartItems} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : emptyProductItemCart())

}