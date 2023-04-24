import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductItemContext } from "../contexts/productItemContext";
import { ProductQuantityContext } from "../contexts/productQuantityContext";
import { ShopContext } from "../contexts/shopProductContext";


export const CartItem = () => {

    const { productItem, setProductItem } = useContext(ProductItemContext);
    const { productQuantity, setProductQuantity } = useContext(ProductQuantityContext);

    const increment = (): void => {
        setProductQuantity(productQuantity + 1);
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
        }
    }) => {
        if (productQuantity === 1) {
            removeProductItem(item);
        } else {
            setProductQuantity(productQuantity - 1);
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
        }
    }) => {
        setProductItem((eachProductItem) => (
            eachProductItem.filter((eachProductItem) => eachProductItem.id !== item.id)
        ));
    }

    return (
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
                        <div>
                            <div className="mb-3">{item.title}</div>
                        </div>
                        <div id="pqt-container" className="flex gap-6">
                            <div>
                                ${item.price}
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-4" id="decrement-button">
                                    <button type="button" onClick={()=>decrement(item)}>-</button>
                                </div>
                                <div>{productQuantity}</div>
                                <div className="w-4" id="increment-button">
                                    <button type="button" onClick={increment}>+</button>
                                </div>
                            </div>
                            <div>${item.price * productQuantity}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}