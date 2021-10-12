import { useState, useEffect } from 'react';
import axios from 'axios';
import { PageContainer, PageTitle } from './styles';
import Content from '../../Content/Content';
import CustomPagination from '../../Pagination/CustomPagination';

const Trending = () => {
  const [trend, setTrend] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setTrend(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <PageTitle>Trending Now</PageTitle>
      <PageContainer>
        {trend &&
          trend.map((val) => (
            <Content
              key={val.id}
              id={val.id}
              poster={val.poster_path}
              title={val.name || val.title}
              date={val.first_air_date || val.release_date}
              media_type={val.media_type}
              rating={val.vote_average}
            />
          ))}
      </PageContainer>
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Trending;
