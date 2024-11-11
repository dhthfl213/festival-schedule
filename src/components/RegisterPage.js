import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'; // 소셜 미디어 아이콘 임포트
import axios from 'axios'; // Axios 임포트
import { Link } from 'react-router-dom'; // Link 임포트
import './RegisterPage.css'; // CSS 파일 경로

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const handleSendCode = async () => {
        try {
            await axios.post('/api/send-verification-code', { phoneNumber });
            alert('인증 코드가 전송되었습니다!');
        } catch (error) {
            console.error('인증 코드 전송 실패:', error.response.data); // 에러 메시지 출력
            alert('인증 코드 전송에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    const handleVerifyCode = () => {
        if (verificationCode === '123456') { // 실제 인증 코드 확인 로직으로 대체 필요
            setIsVerified(true);
            alert('인증 성공!');
        } else {
            alert('인증 코드가 올바르지 않습니다.');
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        
        try {
            await axios.post('/api/register', {
                username,
                nickname,
                email,
                password,
                phoneNumber
            });
            alert('회원가입이 완료되었습니다!');
        } catch (error) {
            console.error('회원가입 실패:', error);
            alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    const handleSocialLogin = (platform) => {
        switch(platform) {
            case 'facebook':
                window.open('https://www.facebook.com/', '_blank');
                break;
            case 'twitter':
                window.open('https://twitter.com/', '_blank');
                break;
            case 'google':
                window.open('https://accounts.google.com/', '_blank');
                break;
            case 'github':
                window.open('https://github.com/', '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="container">
            <div className="card">
                <Link to="/" className="logo-link"> {/* 로고를 클릭했을 때 홈으로 가는 링크 */}
                    <h1>Festival-Schedule</h1> {/* 텍스트로 로고 */}
                </Link>
                <h2>회원가입</h2>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="아이디" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="닉네임" 
                        value={nickname} 
                        onChange={(e) => setNickname(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="이메일" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="비밀번호" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="비밀번호 확인" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    
                    {/* 전화번호 입력 필드 및 인증 코드 전송 버튼 */}
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="전화번호" 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            required 
                        />
                        <button type="button" onClick={handleSendCode}>인증 코드 전송</button>
                    </div>

                    {/* 인증 코드 입력 필드 및 인증 버튼 */}
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="인증 코드" 
                            value={verificationCode} 
                            onChange={(e) => setVerificationCode(e.target.value)} 
                            required 
                        />
                        <button type="button" onClick={handleVerifyCode}>인증</button>
                    </div>

                    <button type="submit" disabled={!isVerified}>회원가입</button>
                </form>

                <div className="social-login">
                    <h3>소셜 미디어로 가입하기</h3>
                    <div className="social-icons">
                        <FontAwesomeIcon 
                            icon={faFacebookF} 
                            size="2x" 
                            style={{ margin: '0 10px', cursor: 'pointer' }} 
                            onClick={() => handleSocialLogin('facebook')} 
                        />
                        <FontAwesomeIcon 
                            icon={faTwitter} 
                            size="2x" 
                            style={{ margin: '0 10px', cursor: 'pointer' }} 
                            onClick={() => handleSocialLogin('twitter')} 
                        />
                        <FontAwesomeIcon 
                            icon={faGoogle} 
                            size="2x" 
                            style={{ margin: '0 10px', cursor: 'pointer' }} 
                            onClick={() => handleSocialLogin('google')} 
                        />
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            size="2x" 
                            style={{ margin: '0 10px', cursor: 'pointer' }} 
                            onClick={() => handleSocialLogin('github')} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;