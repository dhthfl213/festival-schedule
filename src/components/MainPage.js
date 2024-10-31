import React from 'react';
import fireImage from '../images/fire.JPEG'; // 배너 이미지 경로
import './MainPage.css'; // 스타일 파일

const MainPage = () => {
  return (
    <div className="main-page">
      {/* 검색창 추가 */}
      <div className="search-container">
          <input type="text" placeholder="지역축제를 검색하세요." className="search-input" />
          <button className="search-button">검색</button>
        </div>

      
      <header className="header">
        <div className="logo">Festival-Schedule</div> {/* 텍스트 로고로 변경 */}

        {/* 로그인 및 회원가입 링크 추가 */}
      <div className="auth-links">
          <a href="/login" className="auth-link">로그인</a>
          <a href="/register" className="auth-link">회원가입</a>
        </div>
        
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      
      <div className="banner-image">
        <div className="image-box">
          <img src={fireImage} alt="Festival Fire" className="wide-image" />
        </div>
      </div>
      {/* 다른 페이지 콘텐츠는 여기 추가 */}
    </div>
  );
};

export default MainPage;