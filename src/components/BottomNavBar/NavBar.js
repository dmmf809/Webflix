import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BottomNav, BottomNavLinks, NavContainer } from './styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    window.scroll(0, 0);
  };

  useEffect(() => {
    switch (value) {
      case 1:
        history.push('/movies');
        break;
      case 2:
        history.push('/series');
        break;
      case 3:
        history.push('/search');
        break;
      default:
        history.push('/');
    }
  }, [value, history]);

  return (
    <NavContainer>
      <BottomNav
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavLinks
          onClick={handleChange}
          label='Trending'
          icon={<WhatshotIcon />}
        />
        <BottomNavLinks
          onClick={handleChange}
          label='Movies'
          icon={<MovieFilterIcon />}
        />
        <BottomNavLinks
          onClick={handleChange}
          label='TV Series'
          icon={<TvIcon />}
        />
        <BottomNavLinks
          onClick={handleChange}
          label='Search'
          icon={<SearchIcon />}
        />
      </BottomNav>
    </NavContainer>
  );
};

export default NavBar;
