import { useContext } from "react"
import { ShopContext } from "../contexts/shopProductContext"

export const ShopPage = () => {

    const { shopProducts } = useContext(ShopContext);

    return (
        <div className="grid grid-cols-3 justify-around items-center gap-4 m-5 pointer-events-auto">
            {shopProducts.map((data) => (
                <div key={data.id} className="flex flex-col justify-between items-center gap-2 h-full">
                    <div>
                        <img className="w-40 h-40" src={data.image} alt="productImage" />
                    </div>
                    <div>
                        {data.title}
                    </div>
                    <div>
                        ${data.price}
                    </div>
                    <div className="hover:bg-lightMidnight">
                        <button className="hover:text-whiteTextColor">Add item to Cart</button>
                    </div>
                </div>
            ))}
        </div>)
}