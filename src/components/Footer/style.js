import styled from 'styled-components';

export const FooterContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const FooterContent = styled.p`
  color: #7a7a7a;
  font-size: 12px;

  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const Img = styled.img`
  width: 5%;

  @media (max-width: 750px) {
    width: 8%;
  }

  @media (max-width: 600px) {
    width: 10%;
  }
`;
