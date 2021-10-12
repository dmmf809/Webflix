import { createTheme, Pagination } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { PaginationContainer } from './styles';

const pageTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={pageTheme}>
      <PaginationContainer>
        <Pagination
          count={numOfPages}
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </PaginationContainer>
    </ThemeProvider>
  );
};

export default CustomPagination;
