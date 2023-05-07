import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { ProductItemContext } from "../Contexts/productItemContext";
import { ShopCollection, ShopContext } from "../Contexts/shopProductContext"
import { useFetch } from "../useFetch";
import { ThemeContext } from "../Contexts/themeContext";
export const ShopPage = () => {

    const { shopProducts, setShopProducts } = useContext(ShopContext);
    const { setProductItem } = useContext(ProductItemContext);
    const [searchedItems, setSearchedItem] = useState<ShopCollection[]>(shopProducts);
    const {theme} = useContext(ThemeContext);

    //return to normal state when input value is empty
    const productsToRender = searchedItems.length ? searchedItems : shopProducts;

    let url: string = "https://fakestoreapi.com/products/";

    const { loading } = useFetch(url, setShopProducts);

    if (loading) {
        return (
            <div>Loading data</div>
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

        setProductItem([data]);
    }

    const searchItem = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        let value = (e.target as HTMLInputElement).value;
        const searchedItem = shopProducts.filter((shopProduct) => shopProduct.title.toLowerCase().includes(value));
        setSearchedItem(searchedItem);
    }

    return (
        <div className="flex flex-col gap-5">
            <form>
                <input placeholder="Search item..." type="search" className={`${theme ? "text-darkTextColor" : ""} p-0.5`} onChange={(e) => { searchItem(e) }} />
            </form>
            <div className="grid grid-cols-3 justify-around items-center gap-4 pointer-events-auto">
                {productsToRender.map((data) => (
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
            </div>
        </div>
    )
}