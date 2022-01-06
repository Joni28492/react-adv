
import { Props as ProdcutCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps} from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';



export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProdcutCardProps) : JSX.Element,
    Buttons:  (Props: ProductButtonsProps) => JSX.Element;
    Image:    (Props: ProductImageProps)   => JSX.Element;
    Title:    (Props: ProductTitleProps)   => JSX.Element;
}