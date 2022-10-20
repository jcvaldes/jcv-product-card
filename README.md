# JCV-Product-Card

Este es un paquete de pruebas de despliegue en NPM

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'jcv-product-card';

```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>

```

# Hacer instalacion de jest

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
yarn add -D @types/react @types/react-dom @types/react-test-renderer
yarn add -D identity-obj-proxy
```

En package.json

```
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  }
```
