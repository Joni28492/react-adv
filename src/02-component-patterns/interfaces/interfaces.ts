
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
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProdcutCardProps) : JSX.Element,
    Buttons:  (Props: ProductButtonsProps) => JSX.Element;
    Image:    (Props: ProductImageProps)   => JSX.Element;
    Title:    (Props: ProductTitleProps)   => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?:number;
    maxCount?:number;
}



export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?:number;
    product: Product;

    increaseBy: (value:number) => void;
    reset: () => void;
}