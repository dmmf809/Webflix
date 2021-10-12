import styled from 'styled-components';
import { experimentalStyled as style } from '@mui/material';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const SearchInput = style(TextField)`
    width: 30vw;

    @media (max-width: 800px) {
        width: 50vw;
    }
`;

export const SearchButton = style(Button)`
    margin: 15px 0;
`;

export const Icon = style(SearchIcon)`
    color: #ffff;
`;

export const ErrorMsg = styled.h2`
  color: #7a7a7a;
  text-align: center;
  padding: 50px 0;
  font-family: 'Fjalla One', sans-serif;
`;
