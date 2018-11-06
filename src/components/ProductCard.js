import React from 'react';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

const ProductCard = ({ product: { title, price, imageUrl } }) => (
  <div>
    <div><TextBox text={title} /></div>
    <div><Price price={price} /></div>
    <Image src={imageUrl} alt={title} width="150" height="150" />
  </div>
);

export default ProductCard;
