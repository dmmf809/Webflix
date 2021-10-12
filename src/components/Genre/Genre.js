import { useEffect } from 'react';
import axios from 'axios';
import { GenreContainer } from './styles';
import { Choices } from './styles';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const pageTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Genre = ({
  type,
  selectedGenre,
  genre,
  setGenre,
  setSelectedGenre,
  setPage,
}) => {
  const handleAdd = (choice) => {
    setSelectedGenre([...selectedGenre, choice]);
    setGenre(genre.filter((g) => g.id !== choice.id));
    setPage(1);
  };

  const handleRemove = (choiceToDelete) => {
    setSelectedGenre(
      selectedGenre.filter((selected) => selected.id !== choiceToDelete.id)
    );
    setGenre([...genre, choiceToDelete]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenre(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    //unmount the genre component (cancel the API call)
    return () => {
      setGenre([]);
    };
    // eslint-disable-next-line
  }, [setPage]);

  return (
    <ThemeProvider theme={pageTheme}>
      <GenreContainer>
        {selectedGenre &&
          selectedGenre.map((val) => (
            <Choices
              key={val.id}
              label={val.name}
              size='small'
              color='error'
              clickable
              onDelete={() => handleRemove(val)}
            />
          ))}
        {genre &&
          genre.map((val) => (
            <Choices
              key={val.id}
              label={val.name}
              variant='outlined'
              size='small'
              clickable
              onClick={() => handleAdd(val)}
            />
          ))}
      </GenreContainer>
    </ThemeProvider>
  );
};

export default Genre;
