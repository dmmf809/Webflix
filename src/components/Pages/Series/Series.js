import { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer, PageTitle } from '../Trending/styles';
import Content from '../../Content/Content';
import CustomPagination from '../../Pagination/CustomPagination';
import Genre from '../../Genre/Genre';
import useGenre from '../../../hooks/useGenre';

const Series = () => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genre, setGenre] = useState([]);
  const genreURL = useGenre(selectedGenre);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=${genreURL}`
    );

    setSeries(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreURL]);

  return (
    <>
      <PageTitle>TV Series</PageTitle>
      <PageContainer>
        <Genre
          type='tv'
          selectedGenre={selectedGenre}
          genre={genre}
          setGenre={setGenre}
          setSelectedGenre={setSelectedGenre}
          setPage={setPage}
        />
        {series &&
          series.map((val) => (
            <Content
              key={val.id}
              id={val.id}
              poster={val.poster_path}
              title={val.title}
              date={val.first_air_date}
              media_type='tv'
              rating={val.vote_average}
            />
          ))}
      </PageContainer>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </>
  );
};

export default Series;
