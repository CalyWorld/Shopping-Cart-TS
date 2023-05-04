import { useContext } from "react"
import { Link } from "react-router-dom";
import { ProductItemContext } from "../Contexts/productItemContext";
import { ShopContext } from "../Contexts/shopProductContext"
import { useFetch } from "../useFetch";
export const ShopPage = () => {

    const { shopProducts, setShopProducts } = useContext(ShopContext);
    const { setProductItem } = useContext(ProductItemContext);

    let url: string = "https://fakestoreapi.com/products/";

    const {loading} = useFetch(url,setShopProducts);
    if (loading) {
        return (
          <div>Getting data</div>
        )
      }

    const viewSelectedProduct = (data: {
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
        quantity: number
    }): void => {

        console.log(data);
        setProductItem([data]);
    }

    return (
        <div className="grid grid-cols-3 justify-around items-center gap-4 pointer-events-auto">
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
                    <div className="hover:bg-lightMidnight w-full">
                        <Link to={`/Cart/:${data.id}`}><button className="hover:text-whiteTextColor" onClick={() => { viewSelectedProduct(data) }}>Add item</button></Link>
                    </div>
                </div>
            ))}
        </div>)
}