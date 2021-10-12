import { createTheme, Tabs } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useState, useEffect } from 'react';
import {
  InputContainer,
  SearchInput,
  SearchButton,
  Icon,
  MovieTab,
  SeriesTab,
  ErrorMsg,
} from './styles';
import { PageContainer, PageTitle } from '../Trending/styles';
import axios from 'axios';
import Content from '../../Content/Content';
import CustomPagination from '../../Pagination/CustomPagination';

const pageTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Search = () => {
  const [input, setInput] = useState('');
  const [mediaType, setMediaType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchContent, setSearchContent] = useState();
  const [numOfPages, setNumOfPages] = useState();

  const handleChange = (e, val) => {
    setMediaType(val);
    setPage(1);
  };

  const handleInput = (e) => {
    const { value } = e.target;

    const input = value;
    setInput(input);
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        mediaType ? 'tv' : 'movie'
      }?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${input}&page=1&include_adult=false`
    );
    setSearchContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page, mediaType]);

  return (
    <ThemeProvider theme={pageTheme}>
      <PageTitle>Search</PageTitle>
      <InputContainer>
        <SearchInput label='Search' variant='standard' onChange={handleInput} />
        <SearchButton onClick={fetchSearch}>
          <Icon />
        </SearchButton>
      </InputContainer>
      <Tabs
        value={mediaType}
        indicatorColor='primary'
        centered
        onChange={handleChange}
      >
        <MovieTab label='Search Movie' />
        <SeriesTab label='Search TV Series' />
      </Tabs>
      <PageContainer>
        {searchContent &&
          searchContent.map((val) => (
            <Content
              key={val.id}
              id={val.id}
              poster={val.poster_path}
              title={val.name || val.title}
              date={val.first_air_date || val.release_date}
              media_type={mediaType ? 'tv' : 'movie'}
              rating={val.vote_average}
            />
          ))}
        {input &&
          !searchContent &&
          (mediaType ? (
            <ErrorMsg>Sorry, No TV Series Found</ErrorMsg>
          ) : (
            <ErrorMsg> Sorry, No Movies Found</ErrorMsg>
          ))}
      </PageContainer>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </ThemeProvider>
  );
};

export default Search;
