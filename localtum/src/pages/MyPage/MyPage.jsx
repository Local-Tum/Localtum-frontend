import React, { useState } from "react";
import Header from "../../components/home/Header";
import Banner from "../../components/home/Banner";
import Nav from "../../components/home/Nav";
import MenuList from "../../components/mypage/MenuList";
import LogoutModal from "../../components/mypage/LogoutModal";
import styled from "styled-components";

const MyPage = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setLogoutModalOpen(false);
    alert("로그아웃되었습니다.");
    // 로그아웃
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
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
