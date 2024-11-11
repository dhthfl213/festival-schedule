// LoginPage.js
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>로그인</h2>
        <form>
          <input type="text" placeholder="아이디" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">로그인</button>
        </form>
        <div className="footer">
          <p>아직 계정이 없으신가요? <a href="/register">회원가입</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;