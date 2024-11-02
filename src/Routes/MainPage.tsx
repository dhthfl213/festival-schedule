import React from 'react';
import fireImage from '../images/fire.JPEG'; // 배너 이미지 경로
import styled from 'styled-components';

const Search = styled.div`
flex: 1; /* 검색창을 유연하게 설정 */
    display: flex; /* 검색 입력 및 버튼을 수평으로 정렬 */
    justify-content: flex-end; /* 오른쪽 정렬 */ 
    margin: 20px 10px 0; /* 위쪽 여백 추가 (20px), 좌우 여백 추가 */
    .search-input {
    width: 200px; /* 검색창 너비 설정 */
    padding: 8px; /* 패딩 추가 */
    border: 1px solid #ccc; /* 테두리 설정 */
    border-radius: 4px; /* 모서리 둥글게 */
  }

  .search-button {
    padding: 8px 12px; /* 버튼 패딩 설정 */
    border: none; /* 기본 테두리 제거 */
    border-radius: 4px; /* 모서리 둥글게 */
    background-color: #4241418c; /* 버튼 배경색 */
    color: white; /* 버튼 텍스트 색상 */
    cursor: pointer; /* 커서 포인터로 변경 */
    margin-left: 8px; /* 버튼과 검색창 사이 간격 */
  }
`;
const Logo = styled.div`
  font-size: 36px; /* 텍스트 크기 조정 */
    font-weight: bold; /* 글자 두께 조정 */
    color: #333; /* 글자 색상 */
    margin-left: 140px; /* 이미지 박스와 간격 추가 */
    position: relative; /* 배경 효과를 위해 필요 */
`;
const Auth = styled.div`
display: flex;
    gap: 20px; /* 링크 사이의 간격 */
    align-items: center; /* 수직 중앙 정렬 */
color: #333; /* 텍스트 색상 */
    transition: color 0.3s; /* 색상 전환 효과 */
    &:hover{
      color: #007BFF; /* 마우스 오버 시 색상 변화 */
    }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between; /* 로고와 햄버거 메뉴를 양 끝으로 배치 */
  padding: 4px; /* 로고와 이미지 사이에 여백 */
`;

const BannerImage = styled.div`
  position: relative; /* 절대 위치 요소의 기준이 되는 요소 */
  width: 100%; /* 배너가 전체 너비를 차지하도록 설정 */
  height: 740px; /* 배너 높이 설정 */
  overflow: hidden; /* 내용이 박스를 넘지 않도록 설정 */
`;

const ImageBox = styled.div`
  width: 1300px; /* 박스 너비 설정 */
  height: 400px; /* 박스 높이 설정 */
  overflow: hidden; /* 이미지가 박스를 넘지 않도록 설정 */
  position: relative; /* 이미지 위치 조정을 위한 설정 */
  margin: 0 auto; /* 수평 중앙 정렬을 위한 마진 설정 */
  border-radius: 15px; /* 모든 모서리를 둥글게 설정 */

  .wide-image {
    width: 100%; /* 이미지 너비를 박스에 맞추기 */
    height: auto; /* 비율 유지 */
    max-height: 100%; /* 박스 높이에 맞추기 */
    object-fit: cover; /* 박스에 맞게 이미지 조정, 잘릴 수 있음 */
    position: absolute; /* 이미지를 박스 안에서 중앙 정렬하기 위해 필요 */
    top: 40%; /* 수직 위치를 조정 (원하는 만큼 조정) */
    left: 50%; /* 수평 중앙 정렬 */
    transform: translate(-50%, -50%); /* 이미지를 중앙으로 이동 */
    margin: 10px auto 0; /* 위쪽 여백을 추가 (아래는 0으로 설정) */
    border-radius: 15px; /* 모든 모서리를 둥글게 */
  }
`;

const MainPage = () => {
  return (
    <MainContainer>
      {/* 검색창 추가 */}
      <Search>
        <input type="text" placeholder="지역축제를 검색하세요." className="search-input" />
        <button className="search-button">검색</button>
      </Search>
      <Header>
        <Logo>Festival-Schedule</Logo> {/* 텍스트 로고로 변경 */}
        {/* 로그인 및 회원가입 링크 추가 */}
        <Auth>
          <a href="/login" className="auth-link">로그인</a>
          <a href="/register" className="auth-link">회원가입</a>
        </Auth>
      </Header>

      <BannerImage>
        <ImageBox>
          <img src={fireImage} alt="Festival Fire" className="wide-image" />
        </ImageBox>
      </BannerImage>
      {/* 다른 페이지 콘텐츠는 여기 추가 */}
    </MainContainer>
  );
};

export default MainPage;