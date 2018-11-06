import React from 'react';

import ProductCard from './ProductCard';

const Catalog = ({ products }) => (
  products.map(product => <ProductCard key={product.id} product={product} />)
);

export default Catalog;
