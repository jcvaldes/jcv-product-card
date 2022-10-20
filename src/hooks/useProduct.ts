import {
  Product,
  onChangeArgs,
  InitialValues,
} from './../interfaces/product.interfaces';
import { useEffect, useRef, useState } from 'react';

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  console.log(initialValues?.count);
  const isMounted = useRef(false);
  const increaseBy = (value: number): void => {
    // aca tengo el nuevo valor

    let newValue = Math.max(counter + value, 0);
    // setCounter((prev) => Math.max(prev + value, 0))
    if (newValue > 0 && initialValues?.maxCount) {
      newValue = Math.min(counter + value, initialValues?.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };
  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  // cuando se monta por primera vez y cuando cambia el valor
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.count === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
