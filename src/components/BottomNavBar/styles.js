import styled from 'styled-components';
import { experimentalStyled as style } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export const BottomNav = style(BottomNavigation)`
  background: #222222;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const BottomNavLinks = style(BottomNavigationAction)`
  color: #ffff;

  &:hover {
    color: #db2b39;
  }

`;

export const NavContainer = styled.div`
  margin-top: 5%;

  @media (max-width: 900px) {
    margin-top: 10%;
  }

  @media (max-width: 600px) {
    margin-top: 15%;
  }

  @media (max-width: 400px) {
    margin-top: 20%;
  }
`;
