import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    // console.log(shoppingCart);

    const onProdcutCardChange = ({ count, product }: { count: number, product: Product }) => {



        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count }

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //borrar el producto si esta a 0
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };//valdria tambien solo

            // if (count === 0) {
            // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            // return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            // }
        })
    }



    return {
        shoppingCart,
        onProdcutCardChange
    }
}
