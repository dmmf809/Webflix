import { useEffect, useState } from 'react';

import { Backdrop, Fade, Modal } from '@mui/material';
import {
  InsideBox,
  ModalImg,
  ModalImgLandscape,
  ModalInfo,
  ModalAbout,
  ModalTitle,
  ModalDesc,
  ModalButton,
  ModalScroll,
} from './style';
import { ImgContainer } from '../Content/style';
import axios from 'axios';
import {
  imgUnavailable,
  img_500,
  imgUnavailableLandscape,
} from '../../config/config';
import { YouTube } from '@mui/icons-material';
import Carousel from './Carousel/Carousel';

const ContentModal = ({ children, id, media_type }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ImgContainer onClick={handleOpen}>{children}</ImgContainer>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <InsideBox>
              <ModalInfo>
                <ModalImg
                  src={
                    content.poster_path
                      ? `${img_500}${content.poster_path}`
                      : `${imgUnavailable}`
                  }
                  alt={content.name || content.title}
                />
                <ModalImgLandscape
                  src={
                    content.poster_path
                      ? `${img_500}${content.backdrop_path}`
                      : `${imgUnavailableLandscape}`
                  }
                  alt={content.name || content.title}
                />
                <ModalAbout>
                  <ModalTitle>
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      '-----'
                    ).substring(0, 4)}
                    )
                  </ModalTitle>
                  <ModalDesc>{content.overview}</ModalDesc>
                  <ModalScroll>
                    <Carousel media_type={media_type} id={id} />
                  </ModalScroll>
                  <ModalButton
                    variant='contained'
                    startIcon={<YouTube />}
                    target='_blank'
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch Trailer
                  </ModalButton>
                </ModalAbout>
              </ModalInfo>
            </InsideBox>
          )}
        </Fade>
      </Modal>
    </>
  );
};

export default ContentModal;
