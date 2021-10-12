import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/BottomNavBar/NavBar';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
          <Footer />
        </Container>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
