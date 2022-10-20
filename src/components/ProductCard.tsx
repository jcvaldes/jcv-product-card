import React from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/product.interfaces';

export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[]
  // children: (mensaje: string) => JSX.Element
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

// Compound Component Pattern
export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  // console.log(styles)
  const {
    counter,
    isMaxCountReached,
    maxCount,
    increaseBy,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ counter, product, maxCount, increaseBy }}>
      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          product,
          maxCount,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

// ProductCard.Image = ProductImage
// ProductCard.Title = ProductTitle
// ProductCard.Buttons = ProductButtons
