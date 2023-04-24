import { useContext } from "react";
import { ProductItemContext } from "../contexts/productItemContext";
import { ProductQuantityContext } from "../contexts/productQuantityContext";


export const CartItem = () => {
    const { productItem } = useContext(ProductItemContext);
    const { productQuantity, setProductQuantity } = useContext(ProductQuantityContext);
    const increment = () => {
        setProductQuantity(productQuantity + 1);
    }

    const decrement = () => {
        setProductQuantity(productQuantity - 1);
    }

    return (
        <div className="flex flex-col m-10">
            <div className="flex justify-end mb-5">
                <div>Back button</div>
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
                        <div>
                            <div className="mb-3">{item.title}</div>
                            <div className="flex justify-start">
                                <button>Remove item</button>
                            </div>
                        </div>
                        <div id="pqt-container" className="flex gap-6">
                            <div>
                                ${item.price}
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-4" id="decrement-button">
                                    <button type="button" onClick={decrement}>-</button>
                                </div>
                                <div>{productQuantity}</div>
                                <div className="w-4" id="increment-button">
                                    <button type="button" onClick={increment}>+</button>
                                </div>
                            </div>
                            <div>Total</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}