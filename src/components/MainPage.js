import React from 'react';
import { Link } from 'react-router-dom'; // Link 임포트
import fireImage from '../images/부산불꽃축제.JPEG'; 
import flowerImage from '../images/flower.JPEG'; 
import googImage from '../images/경복궁.JPEG'; 
import winterImage from '../images/겨울축제.JPEG'; 
import danpoogImage from '../images/단풍축제.JPEG'; 
import sumImage from '../images/쑥섬쑥섬축제.JPEG'; 
import './MainPage.css'; // 스타일 파일
import FestivalCalendar from './FestivalCalendar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

// 커스텀 화살표 컴포넌트
const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
};

const MainPage = () => {
  const sliderSettings = {
    dots: true, // 점 네비게이션 활성화
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // 화살표 버튼 활성화
    adaptiveHeight: true,
    nextArrow: <Arrow />, // 커스텀 화살표
    prevArrow: <Arrow />, // 커스텀 화살표
  };

  const BannerWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
  `;

  const StyledImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
  `;

  return (
    <div className="main-page">
      <div className="search-container">
        <input type="text" placeholder="지역축제를 검색하세요." className="search-input" />
        <button className="search-button">검색</button>
      </div>

      <header className="header">
        <div className="logo">Festival-Schedule</div>

        <div className="auth-links">
          <Link to="/login" className="auth-link">로그인</Link>
          <Link to="/register" className="auth-link">회원가입</Link>
        </div>

        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* 배너 이미지 슬라이더 */}
      <BannerWrapper>
        <Slider {...sliderSettings}>
          <div>
            <StyledImage src={fireImage} alt="부산불꽃축제" />
          </div>
          <div>
            <StyledImage src={flowerImage} alt="Flower" />
          </div>
          <div>
            <StyledImage src={googImage} alt="경복궁" />
          </div>
          <div>
            <StyledImage src={winterImage} alt="겨울축제" />
          </div>
          <div>
            <StyledImage src={danpoogImage} alt="단풍축제" />
          </div>
          <div>
            <StyledImage src={sumImage} alt="쑥섬쑥섬축제" />
          </div>
        </Slider>
      </BannerWrapper>

      <FestivalCalendar />
    </div>
  );
};

export default MainPage;