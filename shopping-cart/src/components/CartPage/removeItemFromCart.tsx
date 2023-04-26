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
}, decrementItem:string, setProductItem:React.Dispatch<React.SetStateAction<ShopCollection[]>>, setCartItem:React.Dispatch<React.SetStateAction<ShopCollection[]>>) => {

    if(decrementItem === "decrement-product-item"){
    setProductItem((eachProductItem) => (
        eachProductItem.filter((eachProductItem) => eachProductItem.id !== item.id)
    ));
    }else if(decrementItem === "decrement-cart-item"){
        setCartItem((eachCartItem)=>eachCartItem.filter((eachCartItemProduct)=>eachCartItemProduct.id !== item.id));
    }
}