import { FooterContainer, FooterContent, Img } from './style';
import Logo from './tmbd.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        This website uses the TMDB API but is not endorsed or certified by TMDB.
      </FooterContent>
      <Img src={Logo} />
    </FooterContainer>
  );
};

export default Footer;
