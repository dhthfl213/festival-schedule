import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom 임포트
import './App.css';
import MainPage from './components/MainPage'; // MainPage 컴포넌트
import LoginPage from './components/LoginPage'; // 로그인 페이지 (기존)
import RegisterPage from './components/RegisterPage'; // 회원가입 페이지 (기존)

function App() {
  return (
    <Router> {/* Router로 감싸기 */}
      <div className="App">
        <header className="App-header">
          {/* 헤더 콘텐츠는 필요에 따라 추가 */}
        </header>
        <Routes> {/* Routes로 라우팅 설정 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;