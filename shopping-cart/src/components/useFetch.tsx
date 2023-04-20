import {useEffect } from "react";
import { ShopCollection } from "../App";


export const useFetch = (url: string, setShopProducts: React.Dispatch<React.SetStateAction<ShopCollection>>) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const promise = await fetch(url, {
                    mode: "cors"
                });
                if (!promise.ok) {
                    console.log("error with connection");
                } else {
                    const data = await promise.json();
                    setShopProducts(data);
                }
            } catch (err) {
                console.log("failed to fetch data, there are errors");
            }
        }
        fetchData();
    }, [url, setShopProducts])
}