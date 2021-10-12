import styled from 'styled-components';

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  margin: 5px 0;
  transition: ease-out 0.35s;
  position: relative;
  cursor: pointer;
  color: #ffff;
  padding: 5px;

  &:hover {
    opacity: 1;
    transition: ease-in-out 0.35s;
    transform: scale(1.05);
  }

  @media (max-width: 550px) {
    width: 50%;
    padding: 10px;
  }
`;

export const MoviePoster = styled.img``;

export const Details = styled.span`
  text-align: center;
  transition: ease 0.5s;
  background: rgba(0, 0, 0, 0.5);
  width: 95%;
  opacity: 1;
  position: absolute;
  bottom: 5px;
  padding: 5px 0;
  font-size: 12px;
  color: #ffff;
`;
