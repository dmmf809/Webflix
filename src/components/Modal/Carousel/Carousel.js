import axios from 'axios';
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noImg } from '../../../config/config';
import { CarouselImg, CarouselImgName, CarouselItem } from './style';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((val) => (
    <CarouselItem>
      <CarouselImg
        src={val.profile_path ? `${img_300}${val.profile_path}` : noImg}
        alt={val.name}
        onDragStart={handleDragStart}
      />
      <CarouselImgName>{val.name}</CarouselImgName>
    </CarouselItem>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(data);
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      responsive={responsive}
      autoPlay={true}
      autoPlayInterval={1000}
      infinite
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={items}
    />
  );
};

export default Carousel;
