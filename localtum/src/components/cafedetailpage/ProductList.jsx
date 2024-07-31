import React from "react";
import styled from "styled-components";

const ProductList = ({ menu }) => {
  return (
    <ProductGrid>
      {menu.map((item, idx) => (
        <Product key={idx}>
          <ProductImage src={item.image} alt={item.name} />
          <ProductName>{item.name}</ProductName>
          <ProductPrice>{item.price}원</ProductPrice>
        </Product>
      ))}
    </ProductGrid>
  );
};

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100px;
  background-color: #f6f3f3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #b5b6b5;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #444;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 0.7rem;
  color: #444;
  margin: 0;
`;

export default ProductList;
