import { ShopCollection } from "../Contexts/shopProductContext";
export const removeProductItem = (item: {
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
}, decrementItem: string, setProductItem: React.Dispatch<React.SetStateAction<ShopCollection[]>>, setCartItems: React.Dispatch<React.SetStateAction<ShopCollection[]>>, setCartScore:React.Dispatch<React.SetStateAction<number>>) => {
   
    if (decrementItem === "decrement-product-item") {
        setProductItem((eachProductItem) => eachProductItem.filter((eachProductItem) => eachProductItem.id !== item.id));
    } else if (decrementItem === "decrement-cart-item") {
        console.log(decrementItem);
        console.log(item);
        setCartItems((eachCartItem) => eachCartItem.filter((eachCartItemProduct) => eachCartItemProduct.id !== item.id));
        setCartScore((cartScore)=>cartScore-1);
    }
}