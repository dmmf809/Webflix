import styled from 'styled-components';
import { Chip } from '@mui/material';
import { experimentalStyled as style } from '@mui/material';

export const GenreContainer = styled.div`
  padding-bottom: 20px;
`;

export const Choices = style(Chip)`
 margin: 0.3%;
 cursor: pointer;

 &:hover {
    color: #C4CBCA;
 }
`;
