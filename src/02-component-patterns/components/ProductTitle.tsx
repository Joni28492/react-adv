import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

export interface Props {
    title?: string;
    className?: string;
    activeClass?: string;
    style?: React.CSSProperties;
}


export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext)
    return (
        <span style={style} className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
    )
}
