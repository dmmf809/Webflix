import { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer, PageTitle } from '../Trending/styles';
import Content from '../../Content/Content';
import CustomPagination from '../../Pagination/CustomPagination';
import Genre from '../../Genre/Genre';
import useGenre from '../../../hooks/useGenre';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genre, setGenre] = useState([]);
  const genreURL = useGenre(selectedGenre);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`
    );

    setMovies(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreURL]);

  return (
    <>
      <PageTitle>Movies</PageTitle>
      <PageContainer>
        <Genre
          type='movie'
          selectedGenre={selectedGenre}
          genre={genre}
          setGenre={setGenre}
          setSelectedGenre={setSelectedGenre}
          setPage={setPage}
        />
        {movies &&
          movies.map((val) => (
            <Content
              key={val.id}
              id={val.id}
              poster={val.poster_path}
              title={val.name}
              date={val.release_date}
              media_type='movie'
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

export default Movies;
