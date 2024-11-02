import React from 'react';
import fireImage from '../images/fire.JPEG'; // 배너 이미지 경로
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
`;
const Header = styled.header`
  display: flex;
  width: 100%; /* 전체 너비 */
  padding: 10px; /* 헤더 내 여백 추가 */
  background-color: #f8f9fa; /* 헤더 배경색 */
`;
const Logo = styled.div`
  font-size: 30px; /* 텍스트 크기 조정 */
  font-weight: bold; /* 글자 두께 조정 */
  color: ${(props) => props.theme.accentColor};
  padding: 20px 20px;
`;
const Auth = styled.div`
  display: flex;
  position: fixed;
  top : 20px;
  right: 20px;
  gap: 20px; /* 링크 사이의 간격 */
  color: #333; /* 텍스트 색상 */
  transition: color 0.3s; /* 색상 전환 효과 */
  &:hover{
    color: #007BFF; /* 마우스 오버 시 색상 변화 */
  }
`;
const MainContainer = styled.main`
  flex: 1; /* 남은 공간을 모두 차지 */
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  padding: 0px 20px;
`;
const Menu = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  padding : 10px;
`;
const Search = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
  .search-container {
    flex: 1; /* 검색창을 유연하게 설정 */
    display: flex; /* 검색 입력 및 버튼을 수평으로 정렬 */
    justify-content: flex-end; /* 오른쪽 정렬 */ 
    margin: 20px 10px 0; /* 위쪽 여백 추가 (20px), 좌우 여백 추가 */
  }
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
const BannerImage = styled.img`
  position: relative; /* 절대 위치 요소의 기준이 되는 요소 */
  width: 100%; /* 배너가 전체 너비를 차지하도록 설정 */
  height: 600px; /* 배너 높이 설정 */
  overflow: hidden; /* 내용이 박스를 넘지 않도록 설정 */
`;
const MainContents = styled.div`
  padding: 10px;
`;

const MainPage = () => {
  return (
    <Container>
      <Header>
        <Logo>Festival-Schedule</Logo>
        <Auth>
          <a href="/login" className="auth-link">로그인</a>
          <a href="/register" className="auth-link">회원가입</a>
        </Auth>
      </Header>
      <MainContainer>
        <Menu>
          메뉴 선택 바 - 인기 축제 / 축제 달력 etc
          <Search>
            <input type="text" placeholder="지역축제를 검색하세요." className="search-input" />
            <button className="search-button">검색</button>
          </Search>
        </Menu>
        <BannerImage src={fireImage} alt="Festival Fire" />
        <MainContents>
          메인 콘텐츠 넣기
        </MainContents>
      </MainContainer>
    </Container>
  );
};

export default MainPage;