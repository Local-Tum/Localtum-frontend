import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/home/Header";
import Banner from "../../components/home/Banner";
import Nav from "../../components/home/Nav";
import MenuList from "../../components/mypage/MenuList";
import LogoutModal from "../../components/mypage/LogoutModal";
import styled from "styled-components";

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    // 로그아웃 시 로컬 스토리지에서 토큰과 로그인 상태 제거
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");

    setLogoutModalOpen(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setLogoutModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Banner />
      <Nav activeIndex={3} />
      <MainContent>
        <MenuList onLogoutClick={handleLogout} />
      </MainContent>
      {isLogoutModalOpen && (
        <LogoutModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
};

const MainContent = styled.div`
  width: 100%;
  max-width: 720px;
  
  margin: 0 auto;
  padding: 20px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export default MyPage;
