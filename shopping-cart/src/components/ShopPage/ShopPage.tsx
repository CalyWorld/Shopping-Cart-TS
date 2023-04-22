import { useContext } from "react"
import { Link } from "react-router-dom";
import { ProductItemContext } from "../contexts/productItemContext";
import { ShopContext } from "../contexts/shopProductContext"
export const ShopPage = () => {

    const { shopProducts } = useContext(ShopContext);
    const { setProductItem } = useContext(ProductItemContext);

    const viewSelectedCart = (data: {
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
    }): void => {
        setProductItem([data]);
    }

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
                        <Link to={`/Cart/:${data.id}`}><button className="hover:text-whiteTextColor" onClick={() => {viewSelectedCart(data) }}>Add item</button></Link>
                    </div>
                </div>
            ))}
        </div>)
}