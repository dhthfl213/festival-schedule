import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fireImage from './images/부산불꽃축제.JPEG'; 
import flowerImage from './images/flower.JPEG'; 
import googImage from './images/경복궁.JPEG'; 
import winterImage from './images/겨울축.JPEG'; 
import danpoogImage from './images/단풍축제.JPEG'; 
import sumImage from './images/쑥섬쑥섬축제.JPEG';

// styled-components로 스타일을 정의합니다
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
`;

const SliderImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 500px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

function ImageSlider() {
  const [showArrows, setShowArrows] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderContainer
      onMouseEnter={() => setShowArrows(true)} 
      onMouseLeave={() => setShowArrows(false)}
    >
      <Slider {...settings}>
        <div>
          <SliderImage src={fireImage} alt="Slide 1" />
        </div>
        <div>
          <SliderImage src={flowerImage} alt="Slide 2" />
        </div>
        <div>
          <SliderImage src={googImage} alt="Slide 3" />
        </div>
        <div>
          <SliderImage src={winterImage} alt="Slide 4" />
        </div>
        <div>
          <SliderImage src={danpoogImage} alt="Slide 5" />
        </div>
        <div>
          <SliderImage src={sumImage} alt="Slide 6" />
        </div>
      </Slider>
    </SliderContainer>
  );
}

export default ImageSlider;