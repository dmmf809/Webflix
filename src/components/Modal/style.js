import { experimentalStyled as style } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const InsideBox = style(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  background-color: #0a0a0a;
  border: 2px solid #8F8F8F;
  border-radius: 15px;
  box-shadow: 24px;
  color: #ffff;
  padding: 20px;

  @media (max-width: 450px) {    
      width: 80%;
      height: 70%;
  }

`;

export const ModalImg = styled.img`
  display: none;
  object-fit: contain;
  border-radius: 15px;

  @media (min-width: 835px) {
    display: flex;
    width: 38%;
  }
`;

export const ModalImgLandscape = styled.img`
  object-fit: contain;
  border-radius: 15px;

  @media (min-width: 835px) {
    display: none;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media (min-width: 835px) {
    flex-direction: row;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalAbout = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 835px) {
    height: 90%;
    width: 55%;
    padding 0;
}
`;

export const ModalTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;

  @media (min-width: 835px) {
    font-size: 3.5vw;
  }
`;

export const ModalDesc = styled.p`
  display: flex;
  height: 30%;
  overflow-y: scroll;
  padding: 15px;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 835px) {
    font-size: 15px;
  }
`;

export const ModalScroll = styled.div``;

export const ModalButton = style(Button)`
  background-color: #db2b39;
`;
