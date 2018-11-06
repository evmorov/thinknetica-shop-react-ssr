import React from 'react';

const Image = ({
  src, alt, width, height
}) => (
  <img src={require(src)} alt={alt} widht={width} height={height} />
);

export default Image;
