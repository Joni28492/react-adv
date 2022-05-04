

import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from "react";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css"


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

//ProductCardProps
export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset }
        = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {/* {children} */}
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    )
}



