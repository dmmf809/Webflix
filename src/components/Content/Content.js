import { Badge } from '@mui/material';
import { imgUnavailable, img_300 } from '../../config/config';
import ContentModal from '../Modal/ContentModal';
import { MoviePoster, Details } from './style';

const Content = ({ id, poster, title, media_type, rating }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={rating}
        color={rating > 6 ? 'primary' : 'secondary'}
      />
      <MoviePoster
        src={poster ? `${img_300}${poster}` : imgUnavailable}
        alt={title}
      />

      <Details>{media_type === 'tv' ? 'TV Series' : 'Movie'} </Details>
    </ContentModal>
  );
};

export default Content;
