import { useContext } from "react"
import { ShopContext } from "../contexts/shopProductContext"

export const ShopPage = () => {

    const { shopProducts } = useContext(ShopContext);

    return (
        <div className="grid grid-cols-3 justify-around items-center gap-4">
            {shopProducts.map((data) => (
                <div key={data.id} className="flex flex-col items-center">
                    <div>
                        <img className="w-20" src={data.image} alt="productImage" />
                    </div>
                    <div className="w-30 h-30">
                        <p>{data.title}</p>
                    </div>
                    <div>
                        <p>${data.price}</p>
                    </div>
                    <div>Add item to cart</div>
                </div>
            ))}
        </div>)
}