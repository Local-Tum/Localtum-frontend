import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import openIcon from "../../assets/icons/openIcon.png";
import closedIcon from "../../assets/icons/closedIcon.png";
import cafeName from "../../assets/icons/cafeName.png";
import favoriteButton from "../../assets/icons/favoriteButton.png";
import favoriteButtonOff from "../../assets/icons/favoriteButtonOff.png";

const Item = ({ id, name, address, status, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cafedetail/${id}`);
  };

  return (
    <StyledItem onClick={handleClick}>
      <ImageContainer>
        <ItemStatus
          src={status === "closed" ? closedIcon : openIcon}
          alt={status === "closed" ? "영업종료" : "영업중"}
        />
        <FavoriteButton
          src={favoriteButton}
          alt="★"
          onClick={(e) => e.stopPropagation()}
        />
        {image ? (
          <BackgroundImage src={image} alt="카페 사진" />
        ) : (
          <Placeholder>카페 사진</Placeholder>
        )}
      </ImageContainer>
      <ItemDetails>
        <CafeNameIcon src={cafeName} alt="*" />
        <ItemName>{name}</ItemName>
        <ItemDescription>{address}</ItemDescription>
      </ItemDetails>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  width: 50vw;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ImageContainer = styled.div`
  border-radius: 30px;
  position: relative;
  height: 150px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: #b5b6b5;
  background-color: #f3f3f3;
  border-radius: 30px;
`;

const ItemStatus = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  width: 4rem;
`;

const FavoriteButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #1c6a00;
  height: 2.5rem;
  cursor: pointer;
  z-index: 2;
`;

const ItemDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CafeNameIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const ItemName = styled.h2`
  color: #282828;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ItemDescription = styled.span`
  color: #808180;
  font-size: 0.8rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export default Item;
